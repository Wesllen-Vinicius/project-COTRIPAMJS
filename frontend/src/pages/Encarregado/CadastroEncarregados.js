import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import InputMask from "react-input-mask";
import "./encarregado.css";

function CadastroEncarregado() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [CPF, setCPF] = useState("");
  const [dataNas, setDataNas] = useState("");
  const [unidade, setUnidade] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [unidades, setUnidades] = useState([]);
  const [resumo, setResumo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/unidades").then((response) => {
      setUnidades(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/api/encarregados").then((response) => {
      setResumo(response.data);
    });
  }, []);

  const cadastrarEncarregados = () => {
    if (
      nome === "" ||
      senha === "" ||
      CPF === "" ||
      dataNas === "" ||
      unidade === ""
    ) {
      setMensagem("Campos vazios!");
    } else {
      axios
        .post("http://localhost:3001/api/casEncarregados", {
          nome: nome,
          cpf: CPF,
          senha: senha,
          unidade_enc: unidade,
          data_nascimento: dataNas,
        })
        .then((response) => {
          setMensagem(response.data.message);
        })
        .catch((err) => {
          setMensagem(err.data.message);
        });
    }
  };

  return (
    <div>
      <Header />
      {useSelector((state) => state.usuarioLogado || state.usuarioAdmin) ===
      0 ? (
        <Redirect to="/" />
      ) : null}
      {useSelector(
        (state) => state.usuarioLogado === 1 || state.usuarioLogado
      ) > 0 ? (
        <Redirect to="/Encarregado" />
      ) : null}
      <h5 class="card-header">Cadastro de Encarregado</h5>
      <div class="card-body">
        <div class="row">
          <div class="col-md-2 col-sm-12">
            <label for="nome" class="form-label">
              Nome
            </label>
            <input
              onChange={(e) => setNome(e.target.value)}
              type="text"
              class="form-control"
              placeholder="Nome"
            />
          </div>
          <div class="col-md-2 col-sm-12">
            <label for="inputPassword" class="form-label">
              Senha
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="****"
              onChange={(e) => setSenha(e.target.value)}
            ></input>
          </div>
          <div class="col-md-2 col-sm-12">
            <label for="cpf" class="form-label">
              CPF
            </label>
            <InputMask
              mask="999.999.999-99"
              onChange={(e) => setCPF(e.target.value)}
              type="text"
              class="form-control"
              placeholder="CPF"
            />
          </div>
          <div class="col-md-2 col-sm-12">
            <label for="data_nascimento" class="form-label">
              Data De Nascimento
            </label>
            <input
              onChange={(e) => setDataNas(e.target.value)}
              type="date"
              class="form-control"
              placeholder="Data de Nacimento"
            />
          </div>
          <div class="col-md-3 col-sm-12">
            <label for="nome" class="form-label">
              Unidade
            </label>
            <select
              value={unidade}
              class="form-select"
              onChange={(e) => setUnidade(e.target.value)}
            >
              <option selected value="">
                Selecione
              </option>
              {unidades.map((val, index) => {
                return (
                  <option value={val.id} key={index}>
                    {val.nome_unidade}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="row">
          <div class="col-md-1 col-sm-12">
            <input
              type="button"
              class="btn btn-success"
              value="Enviar"
              id="enviar"
              onClick={cadastrarEncarregados}
            />
          </div>
        </div>
      </div>
      {mensagem === "Cadastro realizado com sucesso!" ? (
        <div class="alert alert-success" role="alert">
          <p>{mensagem}</p>
        </div>
      ) : null}
      {mensagem === "Campos vazios!" ? (
        <div class="alert alert-danger d-flex align-items-center" role="alert">
          <svg
            class="bi flex-shrink-0 me-2"
            width="24"
            height="30"
            role="img"
            aria-label="Danger:"
          >
            <FaExclamationTriangle size={20} />
          </svg>
          <div>
            <p>{mensagem}</p>
          </div>
        </div>
      ) : null}
      <div>
        <div class="tabela mt-3 table-responsive ">
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
                <th scope="col">Unidade</th>
                <th scope="col">Data de Nascimento</th>
              </tr>
            </thead>

            {resumo.map((val) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{val.id}</th>
                    <td>{val.nome}</td>
                    <td>{val.cpf}</td>
                    <td>{val.unidade_enc}</td>
                    <td>{val.data_nascimento}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CadastroEncarregado;
