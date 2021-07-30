const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("Projeto cotripamjs, Rodando na porta 3001");
});

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "cotripamjs",
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
  const unidade_enc = req.body.unidade_enc;

  db.query(
    "SELECT * FROM encarregados WHERE  nome = ? ",
    nome,
    (err, results) => {
      if (err) {
      }
      if (results.length > 0) {
        if (
          senha === results[0].senha &&
          unidade_enc == results[0].unidade_enc
        ) {
          res.json({ loggedIn: true, message: "Logado!" });
        } else {
          res.json({
            loggedIn: false,
            message: "Usuário/Unidade ou Senha incorretos!",
          });
        }
      } else {
        res.json({ loggedIn: false, message: "Usuario não Existe!" });
      }
    }
  );
});

app.post("/api/casEncarregados", async (req, res) => {
  const nome = req.body.nome;
  const senha = req.body.senha;
  const cpf = req.body.cpf;
  const unidade_enc = req.body.unidade_enc;
  const data_nascimento = req.body.data_nascimento;

  const sqlInsert =
    "INSERT INTO encarregados (nome, senha, cpf, unidade_enc, data_nascimento) VALUES (?,?,?,?,?)";
  db.query(
    sqlInsert,
    [nome, senha, cpf, unidade_enc, data_nascimento],
    (err) => {
      console.log(err);
      if (err) {
        res.json({ message: "Campos vazios!" });
      } else {
        res.json({ message: "Cadastro realizado com sucesso!" });
      }
    }
  );
});

//app.post("/api/casTeste", async (req, res) => {
//try {
// const {email, senha} = req.body;
// const hash = await bcrypt.hash(senha, 4);
// const sqlInsert =
// "INSERT INTO teste_cas (email, hash) VALUES (?,?)";
// db.query(
//  sqlInsert,
//  [
//    email,
//    hash
//  ],
//  (err) => {
//    console.log(err)
//   if (err) {
//     res.json({ message: "Campos vazios!" });
//   } else {
//      res.json({ message: "Cadastro realizado com sucesso!" });
//    }
//
// }
// );
//  } catch(e) {
// console.log(e);
//   }

// });

app.post("/api/abate", async (req, res) => {
  const abate = req.body.abate;
  const bois_abate = req.body.bois_abate;
  const vacas_abate = req.body.vacas_abate;
  const condenados = req.body.condenados;
  const total = req.body.total;
  const unidade_abate = req.body.unidade_abate;
  const encarregado = req.body.encarregado;
  const data_dia = req.body.data_dia;
  const data = req.body.data;

  const sqlInsert =
    "INSERT INTO abate (abate, bois_abate, vacas_abate, condenados, total, unidade_abate, encarregado, data_dia, data) VALUES (?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      abate,
      bois_abate,
      vacas_abate,
      condenados,
      total,
      unidade_abate,
      encarregado,
      data_dia,
      data,
    ],
    (err) => {
      console.log(err);
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
  const KM = req.body.KM;
  const media = req.body.media;
  const unidade_serosa = req.body.unidade_serosa;
  const encarregado = req.body.encarregado;
  const data_dia = req.body.data_dia;
  const data = req.body.data;

  const sqlInsert =
    "INSERT INTO serosa (primeiro_corte, segundo_corte, terceiro_corte, quarto_corte, KM, media, unidade_serosa, encarregado, data_dia, data) VALUES (?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      primeiro_corte,
      segundo_corte,
      terceiro_corte,
      quarto_corte,
      KM,
      media,
      unidade_serosa,
      encarregado,
      data_dia,
      data,
    ],
    (err) => {
      console.log(err);
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
  const media = req.body.media;
  const total = req.body.total;
  const unidade_tripaCozida = req.body.unidade_tripaCozida;
  const encarregado = req.body.encarregado;
  const data_dia = req.body.data_dia;
  const data = req.body.data;

  const sqlInsert =
    "INSERT INTO tripaCozida ( mocoto, culatra, abomaso, fundo, tripa_grossa, tripa_fina, total, media, unidade_tripaCozida, encarregado ,data_dia, data) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      mocoto,
      culatra,
      abomaso,
      fundo,
      tripa_grossa,
      tripa_fina,
      total,
      media,
      unidade_tripaCozida,
      encarregado,
      data_dia,
      data,
    ],
    (err) => {
      console.log(err);
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
  const bb = req.body.bb;
  const unidade_produtos = req.body.unidade_produtos;
  const encarregado = req.body.encarregado;
  const data_dia = req.body.data_dia;
  const data = req.body.data;

  const sqlInsert =
    "INSERT INTO produtos (sal_fino, sal_grosso, metab, perox, unidade_produtos, encarregado, data_dia, data, bb) VALUES (?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      sal_fino,
      sal_grosso,
      metab,
      perox,
      unidade_produtos,
      encarregado,
      data_dia,
      data,
      bb,
    ],
    (err, result) => {
      console.log(err);
      if (err) {
        res.json({ message: "Campos vazios!" });
      } else {
        res.json({ message: "Cadastro realizado com sucesso!" });
      }
    }
  );
});

app.post("/api/tripaExportacao", async (req, res) => {
  const tripa_reta = req.body.tripa_reta;
  const tripa_torta1c = req.body.tripa_torta1c;
  const tripa_torta2c = req.body.tripa_torta2c;
  const culatra = req.body.culatra;
  const fundo = req.body.fundo;
  const unidade_exportacao = req.body.unidade_exportacao;
  const encarregado = req.body.encarregado;
  const data_dia = req.body.data_dia;
  const data = req.body.data;

  const sqlInsert =
    "INSERT INTO tripa_exportacao (tripa_reta, tripa_torta1c, tripa_torta2c, culatra, fundo, unidade_exportacao, encarregado, data_dia, data) VALUES (?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      tripa_reta,
      tripa_torta1c,
      tripa_torta2c,
      culatra,
      fundo,
      unidade_exportacao,
      encarregado,
      data_dia,
      data,
    ],
    (err) => {
      console.log(err);
      if (err) {
        res.json({ message: "Campos vazios!" });
      } else {
        res.json({ message: "Cadastro realizado com sucesso!" });
      }
    }
  );
});

app.post("/api/casUnidade", async (req, res) => {
  const nome_unidade = req.body.nome_unidade;
  const meta_serosa = req.body.meta_serosa;
  const meta_tripaCozida = req.body.meta_tripaCozida;
  const sqlInsert =
    "INSERT INTO unidades ( meta_serosa, meta_tripaCozida, nome_unidade) VALUES (?,?,?)";
  db.query(sqlInsert, [meta_serosa, meta_tripaCozida, nome_unidade], (err) => {
    console.log(err);
    if (err) {
      res.json({ message: "Campos vazios!" });
    } else {
      res.json({ message: "Cadastro realizado com sucesso!" });
    }
  });
});

//RESUMOS
app.get("/api/resumo/abate", async (req, res) => {
  db.query("SELECT * FROM abate", (err, result) => {
    res.send(result);
  });
});

app.get("/api/resumo/serosa", async (req, res) => {
  db.query("SELECT * FROM serosa", (err, result) => {
    res.send(result);
  });
});

app.get("/api/resumo/faltas", async (req, res) => {
  db.query("SELECT * FROM faltas", (err, result) => {
    res.send(result);
  });
});

app.get("/api/resumo/tripaCozida", async (req, res) => {
  db.query("SELECT * FROM tripaCozida", (err, result) => {
    res.send(result);
  });
});

app.get("/api/resumo/produtos", async (req, res) => {
  db.query("SELECT * FROM produtos", (err, result) => {
    res.send(result);
  });
});

app.get("/api/unidades", async (req, res) => {
  db.query("SELECT * FROM unidades", (err, result) => {
    res.send(result);
  });
});

app.get("/api/encarregados", async (req, res) => {
  db.query("SELECT * FROM encarregados", (err, result) => {
    res.send(result);
  });
});

//CONSULTAS ABATE
app.post("/api/abate/pesquisa", async (req, res) => {
  const encarregado = req.body.encarregado;
  const abate = req.body.abate;
  const unidade_abate = req.body.unidade_abate;
  const sqlSelect = "SELECT * FROM abate WHERE encarregado = ? OR abate = ? OR unidade_abate =? ";
  db.query(sqlSelect, [encarregado, abate, unidade_abate], (err, result) => {
    if (result) {
      res.status(200);
      res.send(result);
    }
  });
});

app.post("/api/abate/pesquisa/data", async (req, res) => {
  const data = req.body.data;
  const data2 = req.body.data2;
  const sqlSelect =
    "SELECT  * FROM  abate WHERE data_dia BETWEEN ? AND ?";
  db.query(sqlSelect, [data, data2], (err, result) => {
    res.send(result);
  });
});

