---
id: "SCEN-UNINSTALL"
type: scenario
name: "Extension uninstallation"
description: "User uninstalls Solidmarks web browser extension"
refines:
  - "UC-STORAGE"
  - "UC-SYNC"
---

# Scenario: Extension uninstallation

## Overview

It demonstrates the extension uninstallation flow, validating that existing connection to bookmark storage is terminated and browser storage for the extension is purged.

## Initial State

- User has Solidmarks extension installed in their web browser.
- Solidmarks extension has a bookmark storage connection configured.
- Browser bookmarks synchronisation with the bookmark storage is enabled.

## Trigger

User initiates Solidmarks browser extension uninstallation using standard browser's facilities e.g. via browser's extension management page.

## Step-by-Step Flow

1. **Action**: User triggers Solidmarks extension uninstallation.
1. **Reaction**: Browser begins uninstalling the extension.
1. **Reaction**: Bookmark sync is disabled.
1. **Reaction**: The extension disconnects from storage.
1. **Reaction**: The extension is stopped.
1. **Reaction**: Browser storage for the extension is purged.
1. **Reaction**: Browser completes the uninstallation.

TODO: do we need to open any web page after uninstallation e.g. with some teardown instructions?

## Expected Outcome

### Success Condition

- Solidmarks extension is uninstalled;
- Browser bookmarks are not synchronised with bookmark storage any more;
- The extension connection to bookmark storage is terminated with access credentials invalidated.
- Browser storage for the extension is purged.

### Verification

- Solidmarks extension is not on the list of installed browser extensions;
- Browser bookmark updates are not persisted in the bookmark storage;
- Browser storage contains no data for the extension.

## Exceptions & Edge Cases

- **Bookmark sync is disabled prior to uninstallation**: same as the nominal case.
- **Bookmark storage connection is terminated prior to uninstallation**: same as the nominal case.
- **Bookmark storage communication error**: same as the nominal case.
