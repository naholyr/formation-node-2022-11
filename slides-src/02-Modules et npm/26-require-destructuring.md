## Que choisir© ?

- Les extensions `.cjs` / `.mjs` peuvent être pénibles (mais on peut spécifier un `type` au niveau _package_ par dossier)
- ESM autorise `await` à la racine du module
- ESM impose l'extension de fichier
- La [cohabitation ESM/CJS n'est pas triviale](https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1)

S'ajouter un peu de confort avec le _destructuring_ et les *shorthand properties* :

```js
// require → destructuring
const { named1, named2: renamed } = require("./module");
// export → shorthand properties
module.exports = { named1, named2 };
```
