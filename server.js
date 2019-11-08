const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

// * sanity
server.get("/", (req, res) =>
  res.status(200).json({ message: "Good news everyone" })
);

module.exports = server;
