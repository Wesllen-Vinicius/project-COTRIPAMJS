const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Wesllen09089909@",
  database: "cotripamjs",
});

app.listen(3001, () => {
    console.log("Projeto cotripamjs, Rodando na porta 3001");
  });
  