// backend/server.ts
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // CORS politikası
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  // Mesaj gönderildiğinde, tüm bağlantılara yayınla
  socket.on("send_message", (message: string) => {
    io.emit("receive_message", message); // Mesajı tüm bağlı kullanıcılara gönder
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
