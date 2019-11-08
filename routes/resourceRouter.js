const resourceRouter = require("express").Router();
db = require("../data/dataModels");

resourceRouter.get("/", (req, res) => {
  db.get("resources")
    .then(resources => res.status(200).json({ resources }))
    .catch(error => res.status(500).json(error.message));
});

resourceRouter.post("/", (req, res) => {
  db.insert("resources", req.body)
    .then(resource => res.status(201).json({ message: "Resource added" }))
    .catch(error => res.status(500).json(error.message));
});

module.exports = resourceRouter;
