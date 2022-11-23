import stickyCluster from "sticky-cluster";
import { server } from "./server.js";

stickyCluster((cb) => cb(server), {
  port: 3000,
  debug: true,
});
