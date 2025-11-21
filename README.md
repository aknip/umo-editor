# umo-editor

Uses a local source for the UMO editor, see `demo-app\package.json": "@umoteam/editor": "file:../umo-editor-source" 
if you want to use the npm version, use "@umoteam/editor": "latest" instead


## Build UMO editor component

```bash
cd umo-editor-source && npm install && npm run build
```
Note: you can run `npm run dev` to test the component in the browser


## Build and run demo app
```bash
cd demo-app && npm install
npm run dev
```

## Kilo Code: Use codebase indexing 
```bash
cd kilo-qdrant-index
docker-compose up
```
