const projectRouter = require("express").Router();
const db = require("../data/dataModels");

projectRouter.get("/", (req, res) => {
  db.get("projects")
    .then(projects => res.status(200).json({ projects }))
    .catch(error => res.status(500).json(error.message));
});

projectRouter.post("/", (req, res) => {
  db.insert("projects", req.body)
    .then(project => res.status(201).json({ message: "Project added" }))
    .catch(error => res.status(500).json(error.message));
});

module.exports = projectRouter;
