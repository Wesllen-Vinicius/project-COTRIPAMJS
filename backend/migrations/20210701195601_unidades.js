exports.up = function (knex) {
  return knex.schema.createTable("unidades", (table) => {
    table.increments("id").primary();
    table.double("meta_tripaCozida").notNull();
    table.double("meta_serosa").notNull();
    table.string("nome_unidade").notNull().unique();
    table.double("total_serosa");
    table.double("total_tripaCozida");
    table.double("total_tripaExpotacao");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("unidades");
};
