exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Lasagna", time: "30min" },
        { recipe_name: "Ramen", time: "5min" },
        { recipe_name: "Cheeseburger", time: "15min" }
      ]);
    });
};