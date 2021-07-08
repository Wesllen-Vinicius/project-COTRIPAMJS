module.exports = {
    development: {
      client: "mysql",
      connection: {
        database: "cotripamjs",
        user: "root",
        password: "",
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  };
  