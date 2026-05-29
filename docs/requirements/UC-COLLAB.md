---
id: "UC-COLLAB"
type: use_case
name: "Bookmark Collaboration"
description: "Collaborating on browser bookmarks with others"
refines:
  - "SOL-SOLIDMARKS"
---

# Use Case: Bookmark Collaboration

## Actor(s)

- **Primary Actor**: Web browser user
- **Secondary Actors**: Other web browser user(s)

## Pre-conditions

- User has a personal storage containing browser bookmark data supported by Solidmarks.
- The storage is available and accessible by user.

## Main Success Outcome

User is able to share bookmarks stored in personal storage with other users. User specifies access permissions granted to other users (read-only, read and write) when sharing.

## Key Functional Scope

- **Storage access**: Bookmark data access in personal storage
- **Storage access management**: Granting storage access permissions to other users

## Post-conditions

- **Success Condition**: Users are able to access bookmark data in owner's personal storage shared with them.
- **Failure Condition**: Users are NOT able to access bookmark data in owner's personal storage shared with them.
- **Failure Condition**: Users are able to access bookmark data in owner's personal storage shared with them in a way violating granted access permissions.
