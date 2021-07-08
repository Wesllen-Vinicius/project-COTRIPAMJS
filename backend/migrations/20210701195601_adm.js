exports.up = function (knex) {
    return knex.schema.createTable("adm", table => {
      table.increments("id").primary();
      table.string("nome", 40).notNull().unique();
      table.string('senha').notNull();    
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable("adm");
  };
  
