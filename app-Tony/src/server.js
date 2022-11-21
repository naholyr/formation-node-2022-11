import { createServer } from "node:http";
import { app } from "./app.js";

const server = createServer(app);

server.listen(8000, () => {
  console.log("Server listening http://localhost:8000");
});
