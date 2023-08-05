"use strict";
import { ISessionInfo, getDefaultSession, logout } from "@inrupt/solid-client-authn-browser";
import { ConnectionId } from "./common";

const logInOutButton = document.getElementById("logInOut");
const title = document.getElementById("status");

function updateSessionStatus(sessionInfo: ISessionInfo) {
    if (sessionInfo.isLoggedIn === true) {
        title.textContent = "Logged in as: " + sessionInfo.webId;
        logInOutButton.textContent = "Log out";
    } else {
        title.textContent = "Not logged in";
        logInOutButton.textContent = "Log in";
    }
}

console.log("Displaying status popup");

let popupPort = browser.runtime.connect({name: ConnectionId.POPUP});

updateSessionStatus(getDefaultSession().info)

logInOutButton.addEventListener("click", async () => {
    const sessionInfo = getDefaultSession().info;
    if (sessionInfo.isLoggedIn === true) {
        // await logout();
        // updateSessionStatus(sessionInfo)
    } else {
        popupPort.postMessage({status: "login"});
        window.open(
            new URL("../session/session.html", window.location.href).toString(),
            '_blank'
        ).focus();
        window.self.close();
    }
});

