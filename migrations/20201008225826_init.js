
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('recipe_name', 128).notNullable().unique()
      tbl.string("time", 128).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient', 128).notNullable()
      tbl.string('quantity', 128).notNullable()
      tbl.integer('recipe_id').unsigned().references('recipes.id')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    })
    .createTable('instructions', tbl => {
        tbl.increments()
        tbl.integer('step_number')
        .notNullable()
        .unsigned()
        tbl.string('instruction', 128)
        .notNullable()
        tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('recipes.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
  };
  