
exports.up = function(knex) {
    return knex.schema.createTable("produtos", table => {
        table.increments("id").primary();
        table.double("sal_fino").notNull();
        table.double("sal_grosso").notNull();
        table.double("metab").notNull();
        table.double("perox").notNull();
        table.double("bb");
        table.date("data_dia").notNull();
        table.string("data").notNull();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("produtos");
};
