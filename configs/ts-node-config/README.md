Create a tsconfig configurator for:

```json
  "ts-node": {
    "files": true,
    "swc": true,
    "transpileOnly": true
  }
```

set ts-node in dev env (once we have nix or devcontainer)
https://typestrong.org/ts-node/docs/recipes/other
NODE_OPTIONS="--loader ts-node/esm"

https://typestrong.org/ts-node/docs/recipes/visual-studio-code
'
https://www.npmjs.com/package/tsconfig-paths
