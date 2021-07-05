
exports.up = function(knex) {
    return knex.schema.createTable("resumo_abate", table => {
        table.increments("id").primary();
        table.double("abate").notNull();
        table.double("bois_abate").notNull();
        table.double("vacas_abate");
        table.double("total");
        table.double("condenados").notNull();
        table.double("primeiro_corte").notNull();
        table.double("segundo_corte").notNull();
        table.double("terceiro_corte").notNull();
        table.double("quarto_corte").notNull();
        table.double("culatra").notNull();
        table.double("abomaso").notNull();
        table.double("fundo").notNull();
        table.double("tripa_grossa").notNull();
        table.double("tripa_fina").notNull();
        table.date("data_dia").notNull();
        table.string("data").notNull();

        
        table.string("cod_encarregado").references("id").inTable("users");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("encarregados");
};
