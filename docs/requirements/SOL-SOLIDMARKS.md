---
id: "SOL-SOLIDMARKS"
type: solution
name: "Solidmarks"
description: "Web browser extension for storing browser bookmarks in interoperable format in user's personal data storage."
---

# Solution: Solidmarks

## Overview

Solidmarks is a web browser extension for storing browser bookmarks in interoperable format in user's personal data storage. It stores bookmark data in user's Solid POD (Personal Online Datastore) in RDF (Resource Description Framework) format and provides for live bookmark data sharing between applications.

## Business Context

Browser bookmark synchronisation facility is a means of seamless sharing of web browser bookmarks across user's devices. Modern browsers either offer autonomous implementations of this facility or don't support bookmark synchronisation at all. This creates the following problems resulting in poor user experience:

1. **Lack of interoperability**: Custom bookmark data formats make exchange between applications complicated.  
   Managing stored bookmarks outside of browser is either unsafe or not supported. Using bookmarks from other browsers by importing them requires browser-specific logic.
1. **Lack of user control**: When bookmark synchronisation feature is used, bookmark data is persisted in browser's own cloud storage that is neither directly accessible nor managed by user.
1. **Lack of cooperation**: Browser's cloud storage is accessible only within the same browser ecosystem.  
   It's not possible to use it for sharing bookmarks between discrete browsers.

There are several third-party solutions addressing problems **#2** and/or **#3**, but not all of the above.

## Constraints

- **Physical & Design Context**:
  - Solidmarks design should allow for building it into browser code directly, where browser extensions aren't supported.
- **Operational**:
  - Solidmarks should work with all the commonly used web browsers.
- **Safety & Security**:
  - Solidmarks design and implementation should adhere to open, well-established industry standards.
  - Solidmarks must protect user data during processing and transmission.
  - Solidmarks must not collect any personal, usage or telemetry data at any time.
