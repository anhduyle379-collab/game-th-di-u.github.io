
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const crypto = require("crypto");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;
const rooms = new Map();

app.get("/", (req, res) => {
  res.send("KITE WORLD Multiplayer Server ONLINE 🪁");
});

function createCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code;

  do {
    code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
  } while (rooms.has(code));

  return code;
}

function publicPlayers(room) {
  return [...room.players.values()].map(p => ({
    id: p.id,
    name: p.name,
    x: p.x,
    y: p.y,
    z: p.z,
    kiteVisible: p.kiteVisible,
    kiteX: p.kiteX,
    kiteY: p.kiteY,
    kiteZ: p.kiteZ,
    kiteColor: p.kiteColor
  }));
}

function broadcastRoom(code) {
  const room = rooms.get(code);
  if (!room) return;

  io.to(code).emit("roomUpdate", {
    code,
    players: publicPlayers(room)
  });
}

function leaveRoom(socket) {
  const code = socket.data.roomCode;
  if (!code) return;

  const room = rooms.get(code);

  socket.leave(code);
  socket.data.roomCode = null;

  if (!room) return;

  room.players.delete(socket.id);

  if (room.players.size === 0) {
    rooms.delete(code);
  } else {
    if (room.host === socket.id) {
      room.host = room.players.keys().next().value;
    }

    broadcastRoom(code);
  }
}

io.on("connection", socket => {
  console.log("Player connected:", socket.id);

  socket.on("createRoom", ({ name } = {}, callback) => {
    if (socket.data.roomCode) leaveRoom(socket);

    const code = createCode();

    const room = {
      code,
      host: socket.id,
      players: new Map()
    };

    room.players.set(socket.id, {
      id: socket.id,
      name: String(name || "Người chơi").slice(0, 20),
      x: 0,
      y: 0,
      z: 8,
      kiteVisible: false,
      kiteX: 0,
      kiteY: 0,
      kiteZ: 0,
      kiteColor: "#e74352"
    });

    rooms.set(code, room);
    socket.join(code);
    socket.data.roomCode = code;

    callback?.({
      success: true,
      code,
      host: true
    });

    broadcastRoom(code);
  });

  socket.on("joinRoom", ({ code, name } = {}, callback) => {
    code = String(code || "").toUpperCase().trim();

    const room = rooms.get(code);

    if (!room) {
      return callback?.({
        success: false,
        message: "Không tìm thấy phòng!"
      });
    }

    if (room.players.size >= 8) {
      return callback?.({
        success: false,
        message: "Phòng đã đủ 8 người!"
      });
    }

    if (socket.data.roomCode) leaveRoom(socket);

    room.players.set(socket.id, {
      id: socket.id,
      name: String(name || "Người chơi").slice(0, 20),
      x: Math.random() * 8 - 4,
      y: 0,
      z: 8,
      kiteVisible: false,
      kiteX: 0,
      kiteY: 0,
      kiteZ: 0,
      kiteColor: "#269ee9"
    });

    socket.join(code);
    socket.data.roomCode = code;

    callback?.({
      success: true,
      code,
      host: room.host === socket.id
    });

    broadcastRoom(code);
  });

  socket.on("playerUpdate", data => {
    const code = socket.data.roomCode;
    const room = rooms.get(code);

    if (!room || !data) return;

    const p = room.players.get(socket.id);
    if (!p) return;

    const number = value =>
      Number.isFinite(Number(value))
        ? Math.max(-10000, Math.min(10000, Number(value)))
        : 0;

    p.x = number(data.x);
    p.y = number(data.y);
    p.z = number(data.z);

    p.kiteVisible = !!data.kiteVisible;
    p.kiteX = number(data.kiteX);
    p.kiteY = number(data.kiteY);
    p.kiteZ = number(data.kiteZ);

    if (typeof data.kiteColor === "string" &&
        /^#[0-9a-fA-F]{6}$/.test(data.kiteColor)) {
      p.kiteColor = data.kiteColor;
    }

    socket.to(code).volatile.emit("playerMoved", {
      id: socket.id,
      ...p
    });
  });

  socket.on("leaveRoom", () => leaveRoom(socket));

  socket.on("disconnect", () => {
    leaveRoom(socket);
    console.log("Player disconnected:", socket.id);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("KITE WORLD SERVER running on port", PORT);
});
