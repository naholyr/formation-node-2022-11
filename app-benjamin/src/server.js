import { createServer } from "node:http";
import { app } from "./app.js";

const server = createServer(app);

server.listen(4000, () => {
  console.log("Server listening http://localhost:4000");
});
