import { readFile } from "node:fs/promises";

/*
Promise:

- Promise#then(handler):
  pour la promesse initiale de X, retourne la promesse de handler(X),
  résolue quand la promesse initiale est résolue,
  cassée sans passer par le handler quand la promesse initiale est cassée

- Promise#catch(handler):
  pour la promesse initiale, retourne la promesse de handler(error),
  cassée sans passer le handler quand la promesse initiale est résolue,
  résolue avec l'erreur handler(error) quand la promesse initiale est cassée avec error

- Promise#finally(handler):
  promesse, résolue ou cassée selon retour de handler(), quand promesse initiale résolue ou cassée

- Promise.resolve(X): promesse immédiatement résolue de X
- Promise.reject(error): promesse immédiatement cassée avec error

- new Promise(executor)
  retourn une promesse, appelle executor(resolve, reject)
  résout la promesse quand on appelle resolve(X)
  casse la promesse quand on appelle reject(error)

- Promise.all(promesses)
  => use-case: attendre tous les succès (le plus classique)
  retourne une promesse d'un tableau de toutes les valeurs promises quand toutes les promesses sont résolues
  retourne promesse cassée si UNE promesse est cassée

- Promise.allSettled(promesses)
  => use-case: quand on veut le détail de TOUS les résultats (même error) et que le .all() est trop global (ne retourne qu'une erreur)
  retourne une promesse d'un tableau de résultats dès que toutes les promesses sont résolues ou cassées
  un résultat = { status: 'fulfilled', value: X } ou { status: 'rejected', reason: error }

- Promise.race(promesses)
  => use-case à découvrir
  retourne une promesse résolue ou cassée quand UNE des promesse est résolue ou cassée

- Promise.any(promesses)
  => use-case: la promesse résolue la plus rapidement (exemple ping sur plusieurs serveurs)
  retourne une promesse résolue quand UNE des promesse est résolue
  retourne une promesse cassée quand TOUTES les promesse sont cassées (avec un AggregateError)
*/

export const tpAsyncPromise = () => {
  const content1P = readFile("./src/tp-async/1.txt", "utf-8"); // 2s
  const content2P = readFile("./src/tp-async/2.txt", "utf-8"); // 1s
  const content3P = readFile("./src/tp-async/3.txt", "utf-8"); // 3s

  const contentsP = Promise.all([content1P, content2P, content3P]);

  return contentsP.then((contents) => contents.join(""));
};

export const tpAsyncPromiseHiddenConcurrency = () => {
  const content1P = readFile("./src/tp-async/1.txt", "utf-8"); // 2s
  const content2P = readFile("./src/tp-async/2.txt", "utf-8"); // 1s
  const content3P = readFile("./src/tp-async/3.txt", "utf-8"); // 3s

  // T = 0
  return content1P.then((content1) => {
    // T = 2s
    return content2P.then((content2) => {
      // T = 2s (fichier 2 fini d'être lu depuis 1s)
      return content3P.then((content3) => {
        // T = 3s
        return content1 + content2 + content3;
      });
    });
  });
};

export const tpAsyncPromiseSeries = () => {
  // T = 0
  return readFile("./src/tp-async/1.txt", "utf-8").then((content1) => {
    // T = 2s
    return readFile("./src/tp-async/2.txt", "utf-8").then((content2) => {
      // T = 3s (+1s)
      return readFile("./src/tp-async/3.txt", "utf-8").then((content3) => {
        // T = 6s (+3s)
        return content1 + content2 + content3;
      });
    });
  });
};

/*
readFile("./src/tp-async/1.txt", "utf-8", (err, content) => {
  if (err) {
    console.error("error", err);
  } else {
    console.log("done reading 1", content);
  }
});
*/
