exports.up = function (knex) {
    return knex.schema.createTable("users", table => {
      table.increments("id").primary();
      table.string("email", 150).notNull().unique();
      table.string('senha',16).notNull();
      
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable("users");
  };
  
