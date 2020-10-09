exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient: "Terriyaki sauce", quantity: "one packet", recipe_id: 2 },
        { ingredient: "Burger Patty", quantity: "one", recipe_id: 3 },
        { ingredient: "Pasta sauce", quantity: "1 cup", recipe_id: 1 }
      ]);
    });
};