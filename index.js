const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const appserver = http.Server(app);
const io = socketio(http);

