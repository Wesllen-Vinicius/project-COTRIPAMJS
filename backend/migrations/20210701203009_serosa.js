
exports.up = function(knex) {
    return knex.schema.createTable("serosa", table => {
        table.increments("id").primary();
        table.double("primeiro_corte").notNull();
        table.double("segundo_corte").notNull();
        table.double("terceiro_corte").notNull();
        table.double("quarto_corte").notNull(); 
        table.date("data_dia").notNull();
        table.string("data").notNull();    
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("serosa");
};
