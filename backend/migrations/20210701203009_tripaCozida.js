
exports.up = function(knex) {
    return knex.schema.createTable("tripaCozida", table => {
        table.increments("id").primary();
        table.double("mocoto").notNull();
        table.double("culatra").notNull();
        table.double("abomaso").notNull();
        table.double("fundo").notNull();
        table.double("tripa_grossa").notNull();
        table.double("tripa_fina").notNull();
        table.double("total").notNull();
        table.double("media").notNull();
        table.date("data_dia").notNull();
        table.string("data").notNull();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("tripaCozida");
};
