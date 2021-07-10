
exports.up = function(knex) {
    return knex.schema.createTable("abate", table => {
        table.increments("id").primary();
        table.double("abate").notNull();
        table.double("bois_abate").notNull();
        table.double("vacas_abate");
        table.double("total");
        table.double("condenados").notNull();
        table.date("data_dia").notNull();
        table.string("data").notNull();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("abate");
};
