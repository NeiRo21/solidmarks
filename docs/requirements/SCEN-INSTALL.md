---
id: "SCEN-INSTALL"
type: scenario
name: "Extension installation"
description: "User installs Solidmarks web browser extension"
refines:
  - "UC-STORAGE"
  - "UC-SYNC"
---

# Scenario: Extension installation

## Overview

It demonstrates the extension installation flow, validating that the extension is initialised with a clean configuration with no bookmark storage connection or credentials set up.

## Initial State

- User has a web browser supported by Solidmarks installed.

## Trigger

User initiates Solidmarks browser extension installation using standard browser's facilities e.g. via browser's extension store.

## Step-by-Step Flow

1. **Action**: User triggers Solidmarks extension installation.
1. **Reaction**: Browser begins installing the extension.
1. **Reaction**: Browser requests browser API/feature access permissions for the extension.
1. **Action**: User confirms the permission grant.
1. **Reaction**: Browser completes the installation.
1. **Reaction**: The extension is initialised with a clean configuration.
1. **Reaction**: The extension is started.

## Expected Outcome

### Success Condition

- Solidmarks extension is installed and started;
- The extension configuration is clean with no bookmark storage connection or access credentials set up;
- Bookmark sync is not enabled.

### Verification

- Solidmarks extension is on the list of enabled browser extensions;
- The extension configuration page shows no storage connection or credentials configured;
- The extension status page reports bookmark sync as not enabled;
- Browser storage for the extension contains no bookmark storage access credentials.

## Exceptions & Edge Cases

- **Installation error**: Solidmarks extension is not installed.
- **User rejects permissions request**: Solidmarks extension is not installed.
- **Extension start failure**: Solidmarks extension is not running, extension configuration and status pages are unavailable.
