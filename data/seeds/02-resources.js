exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        {
          resource_name: "Pencil",
          resource_description: "Mistakes will be made"
        },
        {
          resource_name: "Coffee",
          resource_description: "Sleep will be lost"
        },
        {
          resource_name: "Water",
          resource_description: "Yep."
        }
      ]);
    });
};
