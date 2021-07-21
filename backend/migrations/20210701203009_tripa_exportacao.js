
exports.up = function(knex) {
    return knex.schema.createTable("tripa_exportacao", table => {
        table.increments("id").primary();
        table.double("tripa_reta").notNull();
        table.double("tripa_torta1c").notNull();
        table.double("tripa_torta2c").notNull();
        table.double("culatra").notNull(); 
        table.double("fundo").notNull();
        table.date("data_dia").notNull();
        table.string("data").notNull();    
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("tripa_exportacao");
};
