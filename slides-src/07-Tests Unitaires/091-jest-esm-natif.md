## Jest et l'ESM natif sans transpilation

tl;dr:

- C'est possible
- Mais c'est pas fun
- Mais c'est possible !

```js
// Besoin d'import jest pour l'utiliser
import { jest } from "@jest/globals";

// Mocker avec unstable_mockModule: factory REQUIS
const mockFibo = jest.fn(() => 42);
jest.unstable_mockModule("./fibo.js", () => {
  return mockFibo;
});

// Importer APRÈS le mock (donc avec import dynamique)
const fibo = await import("./fibo.js");
```

No Babel, No Typescript, No nothing.
