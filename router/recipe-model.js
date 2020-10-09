const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients")
    .join("recipes", "recipes.id", "ingredients.recipe_id")
    .select(
      "recipes.recipe_name",
      "ingredients.ingredient",
      "ingredients.quantity",
      "ingredients.recipe_id"
    )
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db("intructions")
    .join("recipes", "recipes.id", "intructions.recipe_id")
    .select(
      "recipes.recipe_name",
      "intructions.recipe_id",
      "intructions.step_number",
      "intructions.intruction"
    )
    .where({ recipe_id: id })
    .orderBy("intructions.step_number");
}
