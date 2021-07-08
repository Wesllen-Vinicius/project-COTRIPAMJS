exports.up = function (knex) {
    return knex.schema.createTable("encarregados", table => {
      table.increments("id").primary();
      table.string("nome", 150).notNull();
      table.string('senha').notNull();
      table.string('unidade').notNull();      
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable("encarregados");
  };
  
