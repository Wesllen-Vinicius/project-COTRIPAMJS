module.exports = {
    development: {
      client: "mysql",
      connection: {
        database: "cotripamjs",
        user: "root",
        password: "12345678",
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  };
  