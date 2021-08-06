exports.up = function (knex) {
  return knex.schema.createTable("estoque_saida", (table) => {
    table.increments("id").primary();
    table.integer("unidade").notNull();
    table.string("encarregado").notNull();
    table.string("NF_saida").notNull();
    table.date("data_saida").notNull();
    table.string("data").notNull();
    table.double("total_serosa_saida").notNull();
    table.double("total_tripaCozida_saida").notNull();
    table.double("total_tripaExportacao_saida").notNull();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("estoque_saida");
};
