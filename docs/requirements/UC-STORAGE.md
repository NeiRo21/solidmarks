---
id: "UC-STORAGE"
type: use_case
name: "Bookmark Storage"
description: "Storing browser bookmarks in personal storage"
refines:
  - "SOL-SOLIDMARKS"
---

# Use Case: Bookmark Storage

## Actor(s)

- **Primary Actor**: Web browser user

## Pre-conditions

- User has a personal storage suitable for bookmark data.
- The storage is available and accessible by user.
- Solidmarks extension is installed and enabled in user's browser.

## Main Success Outcome

Browser bookmarks are saved to user's personal storage.

## Key Functional Scope

- **Browser integration**: Bookmark data access in browser
- **Data conversion**: Formatting bookmark data for storage
- **Storage access**: Personal storage update facility

## Post-conditions

- **Success Condition**: Bookmark data in personal storage matches bookmark data in browser.
- **Failure Condition**: Bookmark data is not persisted in personal storage.
- **Failure Condition**: Bookmark data in personal storage does not match bookmark data in browser.
