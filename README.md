# @x12i/memorix-client-api-client usage example

Typed client for the Memorix client API. Reads catalog, records, processed subjects, shaped refs, agent functions, Memorix fetch routes, Nexum, Scoper, and MCP. Includes the read transport Scoper uses to read through this API.

This consuming application demonstrates **read through a scoped client with an injected http fixture** using the published npm package, pinned to `1.19.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Read scoped Memorix records through the smart client API.
- Access Scoper, Nexum, or agent functions through the same typed transport.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-client-api-client)
- [Implementation monorepo](https://github.com/x12i/memorix-client-api)
- [Reviewed package source](https://github.com/x12i/memorix-client-api/tree/09d8f02eb5f96c2d8f99d28996cff1f9a458115b/memorix-client-api-client)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
