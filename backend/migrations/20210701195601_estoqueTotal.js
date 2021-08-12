exports.up = function (knex) {
  return knex.schema.createTable("estoque_total", (table) => {
    table.increments("id").primary();
    table.double("total_serosa");
    table.double("total_tripaCozida");
    table.double("estoque_unidade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("estoque_total");
};
