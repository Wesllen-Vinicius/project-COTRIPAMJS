exports.up = function (knex) {
    return knex.schema.createTable("encarregados", table => {
      table.increments("id").primary();
      table.string("nome", 150).notNull();
      table.string('senha').notNull();
      table.string('cpf').notNull();
      table.string('unidade').notNull();
      table.string('data_nascimento').notNull();      
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable("encarregados");
  };
  
