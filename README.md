## Formation Node.js 21-23 novembre 2022

Contact : nicolas@chambrier.fr

### Ressources

- Les diagrammes ("tableau blanc") (lien inclus en fin de formation)
- Les slides dans le dossier "slides"
- Les quelques exemples isolés dans le dossier "samples"
- Le gros TP dans le dossier "app"

### Liens utiles

- https://htmlpreview.github.io/?https://github.com/naholyr/formation-node-2022-09/blob/main/slides/index.html
- https://github.com/byteclubfr/site/blob/1005f3a66d3747d65fe468cd63a4a8e25b3054e0/src/blog/this.md
- https://manytools.org/hacker-tools/ascii-banner/
- https://itnext.io/an-intro-to-node-js-that-you-may-have-missed-b175ef4277f7
- http://bluebirdjs.com/docs/api/promise.map.html
- https://github.com/sindresorhus/awesome-nodejs
- https://kentcdodds.com/blog/write-tests
- https://12factor.net/fr/
- https://reflectoring.io/complete-guide-to-cors/
- Testing socket.io (no mock): https://socket.io/fr/docs/v4/testing/#example-with-jest
- Mocking socket.io: https://www.npmjs.com/package/socket.io-mock & https://www.npmjs.com/package/mock-socket
- https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport
- https://www.passportjs.org/
- Hosting Heroku & Mongodb: https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/
- https://socket.io/fr/docs/v4/adapter/

### Le TP

#### Express

- `GET /` (home statique)
- `GET /timeout` (home avec un timeout)
- `GET /tp/async` (promise sans async/await)
- `GET /tp/await` (promise avec async/await)
- `GET /tp/sync` (blocking)
- `GET /tp/callback` (callback)
- `GET /fibo/:number` (gros calcul)

- `POST /auth/login` <- { username, passwor } -> { token }
- `POST /auth/register` <- { username, password } -> no content
- `GET /auth/check` <- header Authorization Bearer -> { username }

#### Websocket

- < `auth` + { token }
- > `unauthorized`
- < `new-message` + { text }
- > `received-message` + { date, text, author }

#### Commandes npm de l'application

- Commandes standard : voir slides
- Démarrer en mode "watch" : `npm run dev`
- Build de production : `npm run build`
- Debug + mode "watch" : `npm run debugdev`
- Tests : `npm test`

#### Serveurs

- Mongo: `docker run --name mongo-formation -d -p 27017:27017 mongo`
- Redis: `docker run --name redis-formation -d -p 6379:6379 redis` (pas requis immédiatement, serait nécessaire pour le stockage des session & adapter socket.io)
