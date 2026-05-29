---
id: "UC-SYNC"
type: use_case
name: "Bookmark Sync"
description: "Synchronising browser bookmarks with personal storage"
refines:
  - "SOL-SOLIDMARKS"
---

# Use Case: Bookmark Sync

## Actor(s)

- **Primary Actor**: Web browser user

## Pre-conditions

- User has a personal storage containing bookmark data supported by Solidmarks.
- The storage is available and accessible by user.
- Solidmarks extension is installed and enabled in user's browser.

## Main Success Outcome

Bookmarks in browser and in personal storage are merged and then synchronised continuously, so that both locations contain matching bookmark data. Maximum synchronisation delay is 10 seconds.

## Key Functional Scope

- **Browser integration**: Bookmark data access in browser
- **Data conversion**: Converting bookmark data between browser and storage formats
- **Storage access**: Bookmark data access in personal storage
- **Data merging**: Merging bookmark data from browser and storage together
- **Data synchronisation**: Reacting to updates to bookmark data in browser and in storage

## Post-conditions

- **Success Condition**: Bookmark data in personal storage matches bookmark data in browser and vice versa.
- **Failure Condition**: Bookmark data in personal storage and in browser do not match after initial merge.
- **Failure Condition**: Bookmark data in personal storage and in browser do not match 10 seconds after an update to either.
