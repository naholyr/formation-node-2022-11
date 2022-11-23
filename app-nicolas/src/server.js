import { createServer } from "node:http";
import { app } from "./app.js";
import { initWebsocket } from "./websocket.js";

const server = createServer(app);

initWebsocket(server);

// Nicolas: 3000
// Benjamin: 4000
// Guillaume: 5000
// Tony: 8000

server.listen(3000, () => {
  console.log("Server listening http://localhost:3000");
});
