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
  password: "12345678",
  database: "cotripamjs",
});

app.listen(3001, () => {
    console.log("Projeto cotripamjs, Rodando na porta 3001");
  });

  app.post("/api/login/admin", async (req, res) => {
    const senha = req.body.senha;
    const nome = req.body.nome;

    db.query("SELECT * FROM adm WHERE  nome = ? ", nome, (err, results) => {
      if (err) {
      }
      if (results.length > 0) {
        if (senha === results[0].senha) {
          res.json({ loggedIn: true, message: "Logado!" });
        } else {
          res.json({
            loggedIn: false,
            message: "Usuário ou Senha incorretos!",
          });
        }
      } else {
        res.json({ loggedIn: false, message: "Usuario não Existe!" });
       
      }
    });
  });


  app.post("/api/login", async (req, res) => {
    const senha = req.body.senha;
    const email = req.body.email;
   
    db.query("SELECT * FROM users WHERE  email = ? ", email, (err, results) => {
      if (err) {
      }
      if (results.length > 0) {
        if (senha === results[0].senha) {
          res.json({ loggedIn: true, message: "Logado!" });
        } else {
          res.json({
            loggedIn: false,
            message: "Usuário ou Senha incorretos!",
          });
        }
      } else {
        res.json({ loggedIn: false, message: "Usuario não Existe!" });
        console.log(email)
      }
    });
  });
  
  app.post("/api/resumoDiario", async (req, res) => {
    const abate = req.body.abate;
    const bois_abate = req.body.bois_abate;
    const vacas_abate = req.body.vacas_abate;
    const condenados = req.body.condenados;
    const total = req.body.total;
    const primeiro_corte = req.body.primeiro_corte;
    const segundo_corte = req.body.segundo_corte;
    const terceiro_corte = req.body.terceiro_corte;
    const quarto_corte = req.body.quarto_corte;
    const culatra = req.body.culatra;
    const abomaso = req.body.abomaso;
    const fundo = req.body.fundo;
    const tripa_grossa = req.body.tripa_grossa;
    const tripa_fina = req.body.tripa_fina;
    const data_dia = req.body.data_dia;
    const data = req.body.data;
    const  cod_encarregado = req.body.cod_encarregado;

    const sqlInsert =
      "INSERT INTO resumo_abate (abate, bois_abate, vacas_abate, condenados, total, primeiro_corte, segundo_corte, terceiro_corte, quarto_corte, culatra, abomaso, fundo, tripa_grossa, tripa_fina, data_dia, data,  cod_encarregado) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(
      sqlInsert,
      [
        abate,
        bois_abate,
        vacas_abate,
        condenados,
        total,
        primeiro_corte,
        segundo_corte,
        terceiro_corte,
        quarto_corte,
        culatra,
        abomaso,
        fundo,
        tripa_grossa,
        tripa_fina,
        data_dia,
        data,
        cod_encarregado
      ],
      (err, result) => {
        console.log(err)
        if (err) {
          res.json({ message: "Campos vazios!" });
        } else {
          res.json({ message: "Cadastro realizado com sucesso!" });
        }
        
      }
      
    );
  });

  app.post("/api/produtos", async (req, res) => {
    const sal_fino = req.body.sal_fino;
    const sal_grosso = req.body.sal_grosso;
    const metab = req.body.metab;
    const perox = req.body.perox;
    const data_dia = req.body.data_dia;
    const data = req.body.data;
    const bb = req.body.bb;
    const abate_resumo = req.body.abate_resumo;

    const sqlInsert =
      "INSERT INTO produtos (sal_fino, sal_grosso, metab, perox, data_dia, data, bb, abate_resumo) VALUES (?,?,?,?,?,?,?,?)";
    db.query(
      sqlInsert,
      [
        sal_fino,
        sal_grosso,
        metab,
        perox,
        data_dia,
        data,
        bb,
        abate_resumo
      ],
      (err, result) => {
        console.log(err)
        if (err) {
          res.json({ message: "Campos vazios!" });
        } else {
          res.json({ message: "Cadastro realizado com sucesso!" });
        }
        
      }
      
    );
  });
  
  app.get("/api/resumo", async (req, res) => {
    db.query("SELECT * FROM resumo_abate", (err, result) => {
      
      res.send(result)
    });
  });
