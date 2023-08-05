"use strict";
import { handleIncomingRedirect, login } from "@inrupt/solid-client-authn-browser";

async function createOrRestoreSession() {
    console.log("Trying to complete session creation or restore existing one...");
    const loginInfo = await handleIncomingRedirect({
        restorePreviousSession: true
    });

    if (!loginInfo.isLoggedIn) {
        console.log("Attempting to log in...");
        await login({
            oidcIssuer: "https://solidcommunity.net",
            // Specify the URL the Solid Identity Provider should redirect the user once logged in,
            // e.g., the current page for a single-page app.
            redirectUrl: window.location.href,
            clientName: "Solidmarks"
        });
    } else {
        console.log(`Logged in successfully as ${loginInfo?.webId} `);
        window.self.close();
    }
}

const queryString = window.location.search;
console.log(`Query string: ${queryString}`);
createOrRestoreSession();
