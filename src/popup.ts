import {ISessionInfo} from "@neiro21/solid-client-authn-webext";
import {ConnectionId, PopupRequestType} from "./common";

const logInOutButton = document.getElementById("logInOut");
const title = document.getElementById("status");

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
    console.log(`Received from background script: ${JSON.stringify(message, undefined, 2)}`)
    const sessionInfo = message as ISessionInfo;
    let webId: string;
    if (sessionInfo) {
        isLoggedIn = sessionInfo.isLoggedIn;
        webId = sessionInfo.webId;
    } else {
        isLoggedIn = false;
    }
    updateDisplayedStatus(isLoggedIn, webId);
}

let popupPort = browser.runtime.connect({name: ConnectionId.POPUP});
popupPort.onMessage.addListener(handleBackgroundScriptMessage);
console.log(`Requesting status`);
popupPort.postMessage({type: PopupRequestType.STATUS});

logInOutButton.addEventListener("click", async () => {
    const requestType: PopupRequestType = isLoggedIn === true ? PopupRequestType.LOGOUT : PopupRequestType.LOGIN;
    console.log(`Requesting ${requestType}`);
    popupPort.postMessage({type: requestType});
    window.self.close();
});
