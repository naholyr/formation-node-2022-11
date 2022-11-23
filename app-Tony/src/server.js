import { createServer } from "node:http";
import { app } from "./app.js";
import { initWebsocket } from "./websocket.js";

const server = createServer(app);

initWebsocket(server);

server.listen(8000, () => {
  console.log("Server listening http://localhost:8000");
});
