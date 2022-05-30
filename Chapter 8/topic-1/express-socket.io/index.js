const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");

const server = http.createServer(app); // Create server with express app

// Create websocket server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // TODO: Ganti jadi URL react-mu
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

// Listen on connection
io.on("connection", (socket) => {
  console.log(
    "INFO:",
    "seseorang telah bergabung ke chat room!",
    socket.client.id
  );

  socket.on("chat message", (msg) => {
    console.log("INFO:", "incoming message", msg);
    const newMessage = `From ${socket.client.id}: ${msg}`;
    io.emit("incoming message", newMessage);
  });

  socket.on("typing", (client) => {
    console.log("INFO:", "incoming typing", client);
    io.emit("incoming typing", client);
  });

  socket.on("disconnect", () => {
    console.log("INFO:", "seseorang telah pergi dari chat room!");
  });
});

server.listen(8000, () => {
  console.log("INFO:", "Listening on port 8000");
});
