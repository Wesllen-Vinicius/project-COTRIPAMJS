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


  app.post("/api/encarregados", async (req, res) => {
    const senha = req.body.senha;
    const nome = req.body.nome;
   
    db.query("SELECT * FROM encarregados WHERE  nome = ? ", nome, (err, results) => {
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
  
  app.post("/api/casEncarregados", async (req, res) => {
    const nome = req.body.nome;
    const senha = req.body.senha;
    const cpf = req.body.cpf;
    const unidade = req.body.unidade;
    const data_nascimento = req.body.data_nascimento;

    const sqlInsert =
      "INSERT INTO encarregados (nome, senha, cpf, unidade, data_nascimento) VALUES (?,?,?,?,?)";
    db.query(
      sqlInsert,
      [
        nome,
        senha,
        cpf,
        unidade,
        data_nascimento
      ],
      (err) => {
        console.log(err)
        if (err) {
          res.json({ message: "Campos vazios!" });
        } else {
          res.json({ message: "Cadastro realizado com sucesso!" });
        }    
      }  
    );
  }); 

  app.post("/api/abate", async (req, res) => {
    const abate = req.body.abate;
    const bois_abate = req.body.bois_abate;
    const vacas_abate = req.body.vacas_abate;
    const condenados = req.body.condenados;
    const total = req.body.total;
    const data_dia = req.body.data_dia;
    const data = req.body.data;

    const sqlInsert =
      "INSERT INTO abate (abate, bois_abate, vacas_abate, condenados, total, data_dia, data) VALUES (?,?,?,?,?,?,?)";
    db.query(
      sqlInsert,
      [
        abate,
        bois_abate,
        vacas_abate,
        condenados,
        total,
        data_dia,
        data
      ],
      (err) => {
        console.log(err)
        if (err) {
          res.json({ message: "Campos vazios!" });
        } else {
          res.json({ message: "Cadastro realizado com sucesso!" });
        }    
      }  
    );
  });

  app.post("/api/serosa", async (req, res) => {
    const primeiro_corte = req.body.primeiro_corte;
    const segundo_corte = req.body.segundo_corte;
    const terceiro_corte = req.body.terceiro_corte;
    const quarto_corte = req.body.quarto_corte;
    const data_dia = req.body.data_dia;
    const data = req.body.data;

    const sqlInsert =
      "INSERT INTO serosa (primeiro_corte, segundo_corte, terceiro_corte, quarto_corte, data_dia, data) VALUES (?,?,?,?,?,?)";
    db.query(
      sqlInsert,
      [
        primeiro_corte,
        segundo_corte,
        terceiro_corte,
        quarto_corte,
        data_dia,
        data
      ],
      (err) => {
        console.log(err)
        if (err) {
          res.json({ message: "Campos vazios!" });
        } else {
          res.json({ message: "Cadastro realizado com sucesso!" });
        }    
      }  
    );
  });

  app.post("/api/faltas", async (req, res) => {
    const ativos = req.body.ativos;
    const trabalhou = req.body.trabalhou;
    const nome_completo = req.body.nome_completo;
    const observacao = req.body.observacao;
    const data_dia = req.body.data_dia;
    const data = req.body.data;

    const sqlInsert =
      "INSERT INTO faltas (ativos, trabalhou, nome_completo, observacao, data_dia, data) VALUES (?,?,?,?,?,?)";
    db.query(
      sqlInsert,
      [
        ativos,
        trabalhou,
        nome_completo,
        observacao,
        data_dia,
        data
      ],
      (err) => {
        console.log(err)
        if (err) {
          res.json({ message: "Campos vazios!" });
        } else {
          res.json({ message: "Cadastro realizado com sucesso!" });
        }    
      }  
    );
  });

  app.post("/api/tripaCozida", async (req, res) => {
    const mocoto = req.body.mocoto;
    const culatra = req.body.culatra;
    const abomaso = req.body.abomaso;
    const fundo = req.body.fundo;
    const tripa_grossa = req.body.tripa_grossa;
    const tripa_fina = req.body.tripa_fina;
    const data_dia = req.body.data_dia;
    const data = req.body.data;

    const sqlInsert =
      "INSERT INTO tripaCozida ( mocoto, culatra, abomaso, fundo, tripa_grossa, tripa_fina, data_dia, data) VALUES (?,?,?,?,?,?,?,?)";
    db.query(
      sqlInsert,
      [
        mocoto,
        culatra,
        abomaso,
        fundo,
        tripa_grossa,
        tripa_fina,
        data_dia,
        data
      ],
      (err) => {
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
    

    const sqlInsert =
      "INSERT INTO produtos (sal_fino, sal_grosso, metab, perox, data_dia, data, bb) VALUES (?,?,?,?,?,?,?)";
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
  
  app.get("/api/resumo/abate", async (req, res) => {
    db.query("SELECT * FROM abate", (err, result) => {
      res.send(result)
    });
  });

  app.get("/api/resumo/serosa", async (req, res) => {
    db.query("SELECT * FROM serosa", (err, result) => {
      res.send(result)
    });
  });
  
  app.get("/api/resumo/faltas", async (req, res) => {
    db.query("SELECT * FROM faltas", (err, result) => {
      res.send(result)
    });
  });

  app.get("/api/resumo/tripaCozida", async (req, res) => {
    db.query("SELECT * FROM tripaCozida", (err, result) => {
      res.send(result)
    });
  });

  app.get("/api/resumo/produtos", async (req, res) => {
    db.query("SELECT * FROM produtos", (err, result) => {
      res.send(result)
    });
  });
