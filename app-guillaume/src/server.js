import { createServer } from "node:http";
import { app } from "./app.js";
import { initWebsocket } from "./websocket.js";

const server = createServer(app);

initWebsocket(server);

server.listen(5000, () => {
  console.log(`Server listening on PORT http://localhost:5000`);
});
