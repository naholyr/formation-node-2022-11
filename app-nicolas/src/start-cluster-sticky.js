import stickyCluster from "sticky-cluster";
import { server } from "./server.js";

stickyCluster((cb) => cb(server), {
  port: process.env.PORT,
  debug: true,
});
