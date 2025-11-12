// MIT License
//
// Copyright (c) 2025 NeiRo21
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//

import { Session } from "@neiro21/solid-client-authn-webext";
import { getSolidDataset } from "@inrupt/solid-client";
import { ConnectionId, PopupRequest, PopupRequestType } from "./common";

// function updateIcon() {
//   browser.browserAction.setIcon({
//     path: currentBookmark ? {
//       18: "icons/star-filled-19.png",
//       37: "icons/star-filled-38.png"
//     } : {
//       18: "icons/star-empty-19.png",
//       37: "icons/star-empty-38.png"
//     },
//     tabId: currentTab.id
//   });
//   browser.browserAction.setTitle({
//     // Screen readers can see the title
//     title: currentBookmark ? 'Unbookmark it!' : 'Bookmark it!',
//     tabId: currentTab.id
//   });
// }

let popupPort: browser.runtime.Port;

function handlePopupMessage(message: object) {
  console.log(`Received from popup: ${JSON.stringify(message, undefined, 2)}`);
  const request = message as PopupRequest;
  switch (request.type) {
    case PopupRequestType.LOGIN:
      self.solidSession.login({
        oidcIssuer: "https://solidcommunity.net",
        clientName: "Solidmarks",
        redirectUrl: browser.identity.getRedirectURL(),
      });
      break;

    case PopupRequestType.LOGOUT:
      void self.solidSession.logout();
      break;

    case PopupRequestType.STATUS:
      popupPort.postMessage(self.solidSession.info);
      break;

    default:
      break;
  }
}

function logBookmarkEvent(type: string, bookmarkId: string, info: object) {
  console.log(
    `${type} id: ${bookmarkId} info: ${JSON.stringify(info, undefined, 2)}`,
  );
}

browser.bookmarks.onCreated.addListener(async (id, bookmark) => {
  logBookmarkEvent("Created", id, bookmark);

  if (self.solidSession.info.isLoggedIn) {
    getSolidDataset("https://neiro21.solidcommunity.net/bookmarks/index.ttl", {
      fetch: self.solidSession.fetch,
    })
      .then((dataset) => console.log(JSON.stringify(dataset, undefined, 2)))
      .catch((reason) => console.log(`Failed to fetch dataset: ${reason}`));
  } else {
    console.log("Not logged in, skipping");
  }
});

browser.bookmarks.onRemoved.addListener((id, removeInfo) => {
  logBookmarkEvent("Removed", id, removeInfo);
});

browser.bookmarks.onChanged.addListener((id, changeInfo) => {
  logBookmarkEvent("Changed", id, changeInfo);
});

browser.bookmarks.onMoved.addListener((id, moveInfo) => {
  logBookmarkEvent("Moved", id, moveInfo);
});

browser.runtime.onConnect.addListener((p) => {
  if (p.name === ConnectionId.POPUP) {
    popupPort = p;
    popupPort.onMessage.addListener(handlePopupMessage);
  }
});

self.solidSession = new Session();

console.log("Solidmarks started");
