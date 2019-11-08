const db = require("./dbConfig");

function get(table) {
  if (table === "tasks") {
    return db
      .from("projects")
      .join(table, `${table}.project_id`, "projects.id")
      .orderBy("project_id")
      .then(complete => boolConvert(complete));
  } else if (table === "projects") {
    return db.from(table).then(complete => boolConvert(complete));
  } else {
    return db.from(table);
  }
}

function insert(table, data) {
  return db.insert(data).into(table);
}

function boolConvert(task) {
  task.forEach(task => {
    task.completed === 0 ? (task.completed = false) : (task.completed = true);
  });
  return task;
}

module.exports = {
  get,
  insert
};
