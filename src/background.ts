"use strict";
import { fetch, getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { getSolidDataset } from "@inrupt/solid-client";
import { ConnectionId } from "./common";

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

function logBookmarkEvent(type: string, bookmarkId: string, info: object) {
    console.log(`${type} id: ${bookmarkId} info: ${JSON.stringify(info, undefined, 2)}`);
}

function handlePopupMessage(message: object) {
    console.log(`Received from popup: ${JSON.stringify(message, undefined, 2)}`)
}

browser.bookmarks.onCreated.addListener(async (id, bookmark) => {
    logBookmarkEvent('Created', id, bookmark);

    if (getDefaultSession().info.isLoggedIn) {
        const bookmarkIndex = await getSolidDataset(
            "https://neiro21.solidcommunity.net/bookmarks/index.ttl",
            { fetch: fetch }
        );
        console.log(JSON.stringify(bookmarkIndex, undefined, 2));
    } else {
        console.log("Not logged in, skipping");
    }
});

browser.bookmarks.onRemoved.addListener((id, removeInfo) => {
    logBookmarkEvent('Removed', id, removeInfo);
});

browser.bookmarks.onChanged.addListener((id, changeInfo) => {
    logBookmarkEvent('Changed', id, changeInfo);
});

browser.bookmarks.onMoved.addListener((id, moveInfo) => {
    logBookmarkEvent('Moved', id, moveInfo);
});

let popupPort: browser.runtime.Port;
browser.runtime.onConnect.addListener((p) => {
    if (p.name === ConnectionId.POPUP) {
        popupPort = p;
        popupPort.onMessage.addListener(handlePopupMessage);
    }
});

console.log('Solidmarks started');
