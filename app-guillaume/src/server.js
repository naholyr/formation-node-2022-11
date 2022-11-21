import { createServer } from "node:http";
import { app } from "./app.js";

const server = createServer(app);

server.listen(5000, () => {
  console.log(`Server listening on PORT http://localhost:5000`);
});
