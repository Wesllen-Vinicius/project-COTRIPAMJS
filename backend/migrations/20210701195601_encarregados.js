exports.up = function (knex) {
  return knex.schema.createTable("encarregados", (table) => {
    table.increments("id").primary();
    table.string("nome", 150).notNull();
    table.string("senha").notNull();
    table.string("cpf").notNull().unique();
    table.integer("unidade_enc", 80).notNull();
    table.string("data_nascimento", 23).notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("encarregados");
};
