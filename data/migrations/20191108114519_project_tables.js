exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name", 140).notNullable();
      tbl.string("project_description", 500);
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_description", 256).notNullable();
      tbl.string("task_notes", 1000);
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("resource_name", 140)
        .notNullable()
        .unique();
      tbl.string("resource_description", 500);
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
