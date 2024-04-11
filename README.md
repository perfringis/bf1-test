# bf1-test

## Refresh of REM ID and SID

Method type and URL.

```
GET https://accounts.ea.com/connect/auth?client_id=sparta-backend-as-user-pc&response_type=code&release_type=none
```

Headers

```
Cookie: remid=<REM_ID>;sid=<S_ID>;
```

Example request

```
curl --cookie "remid=<REM_ID>;sid=<S_ID>;" https://accounts.ea.com/connect/auth?client_id=sparta-backend-as-user-pc&response_type=code&release_type=none
```

Example response

```json
{
  "type": "basic",
  "url": "https://accounts.ea.com/connect/auth?client_id=sparta-backend-as-user-pc&response_type=code&release_type=none",
  "redirected": false,
  "status": 302,
  "ok": false,
  "statusText": "Found",
  "headers": {
    "append": "[function]",
    "delete": "[function]",
    "get": "[function]",
    "has": "[function]",
    "set": "[function]",
    "getSetCookie": "[function]",
    "keys": "[function]",
    "values": "[function]",
    "entries": "[function]",
    "forEach": "[function]"
  },
  "body": {
    "locked": false,
    "cancel": "[function]",
    "getReader": "[function]",
    "pipeThrough": "[function]",
    "pipeTo": "[function]",
    "tee": "[function]",
    "values": "[function]"
  },
  "bodyUsed": false,
  "clone": "[function]",
  "blob": "[function]",
  "arrayBuffer": "[function]",
  "text": "[function]",
  "json": "[function]",
  "formData": "[function]"
}
```

response.headers.keys()

```
- cache-control
- content-length
- date
- expires
- location
- p3p
- pragma
- server
- set-cookie
- strict-transport-security
- x-envoy-hostname
- x-envoy-upstream-service-time
- x-nexus-hostname
- x-nexus-sequence
- x-samesite
```

response.body

```
ReadableStream
```

