const taskRouter = require("express").Router();
const db = require("../data/dataModels");

taskRouter.get("/", (req, res) => {
  db.get("tasks")
    .then(tasks => res.status(200).json({ tasks }))
    .catch(error => res.status(500).json(error.message));
});

taskRouter.post("/", (req, res) => {
  db.insert("tasks", req.body)
    .then(tasks => res.status(200).json({ message: "Task added" }))
    .catch(error => res.status(500).json(error.message));
});

module.exports = taskRouter;
