import cluster from "node:cluster";
import { cpus } from "node:os";

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} started`);
  const numCPUs = cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker ${process.pid} started`);
  await import("./start.js");
}
