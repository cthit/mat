console.log("STARTING SERVER");

const PORT = 8080;

const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

server.listen(PORT);

module.exports = { app, createRouter: () => express.Router() };
