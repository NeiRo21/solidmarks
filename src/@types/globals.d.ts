import { Session } from "@neiro21/solid-client-authn-webext";

declare global {
    interface Window {
        solidSession: Session;
    }
}

export {};
