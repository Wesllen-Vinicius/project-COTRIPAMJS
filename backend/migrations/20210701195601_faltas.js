exports.up = function (knex) {
    return knex.schema.createTable("faltas", table => {
      table.increments("id").primary();
      table.integer("ativos").notNull();
      table.integer('trabalhou').notNull();
      table.string('nome_completo', 200).notNull();
      table.string('observacao').notNull(); 
      table.date("data_dia").notNull();
      table.string("data").notNull();      
    });
  };
  exports.down = function (knex) {
    return knex.schema.dropTable("faltas");
  };
  
