---
id: "UC-INTEROP"
type: use_case
name: "Bookmark Interoperability"
description: "Browser bookmark exchange and use across systems and applications"
refines:
  - "SOL-SOLIDMARKS"
---

# Use Case: Bookmark Interoperability

## Actor(s)

- **Primary Actor**: Web browser user

## Pre-conditions

- User has a personal storage containing browser bookmark data supported by Solidmarks.
- The storage is available and accessible by user.

## Main Success Outcome

User is able to use and manage bookmark data in personal storage across different systems and applications. Solidmarks use does not prevent or disrupt the aforsaid.

## Key Functional Scope

- **Standard data representation**: Using standard formats and schemas for storing bookmark data in storage

## Post-conditions

- **Success Condition**: Bookmark data in personal storage can be used and managed in any way outside Solidmarks without breaking any use case.
- **Failure Condition**: Bookmark data in personal storage can only be used and managed with Solidmarks.
- **Failure Condition**: Solidmarks use prevents from using bookmark data with another system or application.
