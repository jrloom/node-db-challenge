const express = require("express");
const morgan = require("morgan");

const projectRouter = require("./routes/projectRouter");
const resourceRouter = require("./routes/resourceRouter");
const taskRouter = require("./routes/taskRouter");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

// * sanity
server.get("/", (req, res) =>
  res.status(200).json({ message: "Good news everyone" })
);

module.exports = server;
