exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          task_description: "Task 1",
          task_notes: "do something",
          completed: false,
          project_id: 1
        },
        {
          task_description: "Task 2",
          task_notes: "Do something else",
          completed: false,
          project_id: 2
        }
      ]);
    });
};
