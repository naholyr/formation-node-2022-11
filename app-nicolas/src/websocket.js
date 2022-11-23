import { Server } from "socket.io";
import Redis from "ioredis";
import { createAdapter } from "@socket.io/redis-adapter";
import { checkToken } from "./token.js";

export const initWebsocket = (httpServer) => {
  const io = new Server({
    serveClient: true, // default = true
  });

  io.listen(httpServer);

  io.use((socket, next) => {
    const { token } = socket.handshake.auth;
    if (!token) {
      return next(new Error("Invalid credentials"));
    }

    try {
      const user = checkToken(token);
      socket.user = user;
      next();
    } catch (err) {
      next(err);
    }
  });

  io.on("connection", (client) => {
    /*
    client.emit('name', ...args)            =>  send event to client
    client.on('name', (...args) => ...)     =>  listen event from client
    io.emit('name', ...args)                =>  send event to all clients
    client.broadcast.emit('name', ...args)  =>  send event to all clients except the current one

    // Our API:
    client.user.username                  =>  connected user's username
    */

    client.on("new-message", ({ text }) => {
      const author = client.user.username;
      const date = Date.now();
      const message = { author, text, date };
      console.log("New message", message);
      io.emit("received-message", message);
      // TODO save message in database
    });

    setInterval(() => {
      client.emit("time", Date.now());
    });

    console.log("New client connected", client.user);

    client.on("disconnect", () => {
      console.log("Client disconnected");
    });

    // TODO fetch messages from database
    client.emit("received-message", {
      date: Date.now(),
      author: "System",
      text: "Welcome " + client.user.username,
    });
  });

  // Scalable io.emit:
  const subClient = new Redis("redis://localhost:6379");
  const pubClient = new Redis("redis://localhost:6379");
  const adapter = createAdapter(pubClient, subClient);
  io.adapter(adapter);
};
