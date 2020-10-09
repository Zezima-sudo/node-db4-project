exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("instructions")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("instructions").insert([
          { step_number: 1, instruction: "fill a pot with water", recipe_id: 2 },
          { step_number: 2, instruction: "bring water to a boil", recipe_id: 2 },
          { step_number: 3, instruction: "add ramen packet", recipe_id: 2 },
          {
            step_number: 1,
            instruction: "place burger one the grill",
            recipe_id: 3
          },
          {
            step_number: 2,
            instruction: "cook one one side for eight minutes",
            recipe_id: 3
          },
          {
            step_number: 1,
            instruction: "heat pasta sauce in pan for 5 minutes",
            recipe_id: 1
          },
          {
            step_number: 2,
            instruction: "add cheese to pan",
            recipe_id: 1
          }
        ]);
      });
  };