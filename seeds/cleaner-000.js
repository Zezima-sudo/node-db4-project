const knexCleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return knexCleaner.clean(knex).then(function() {
    // your database is now clean
  });
};