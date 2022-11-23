import { server } from "./server.js";

server.listen(process.env.PORT, () => {
  console.log("Server listening http://localhost:" + process.env.PORT);
});
