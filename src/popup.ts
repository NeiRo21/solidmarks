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

import { ISessionInfo } from "@neiro21/solid-client-authn-webext";
import { ConnectionId, PopupRequestType } from "./common";

const logInOutButton = document.getElementById("logInOut") as HTMLElement;
const title = document.getElementById("status") as HTMLElement;

let isLoggedIn = false;

function updateDisplayedStatus(isLoggedIn: boolean, webId?: string) {
  if (isLoggedIn === true) {
    title.textContent = "Logged in as: " + webId;
    logInOutButton.textContent = "Log out";
  } else {
    title.textContent = "Not logged in";
    logInOutButton.textContent = "Log in";
  }
}
updateDisplayedStatus(false);
console.log("Displaying status popup");

function handleBackgroundScriptMessage(message: object) {
  console.log(
    `Received from background script: ${JSON.stringify(message, undefined, 2)}`,
  );
  const sessionInfo = message as ISessionInfo;
  let webId: string | undefined;
  if (sessionInfo) {
    isLoggedIn = sessionInfo.isLoggedIn;
    webId = sessionInfo.webId;
  } else {
    isLoggedIn = false;
  }
  updateDisplayedStatus(isLoggedIn, webId);
}

const popupPort = browser.runtime.connect({ name: ConnectionId.POPUP });
popupPort.onMessage.addListener(handleBackgroundScriptMessage);
console.log(`Requesting status`);
popupPort.postMessage({ type: PopupRequestType.STATUS });

logInOutButton.addEventListener("click", async () => {
  const requestType: PopupRequestType =
    isLoggedIn === true ? PopupRequestType.LOGOUT : PopupRequestType.LOGIN;
  console.log(`Requesting ${requestType}`);
  popupPort.postMessage({ type: requestType });
  window.self.close();
});
