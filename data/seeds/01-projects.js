exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          project_name: "Sprint",
          project_description: "finish this thing",
          completed: false
        },
        {
          project_name: "Breath",
          project_description: "get a brown bag",
          completed: false
        }
      ]);
    });
};
