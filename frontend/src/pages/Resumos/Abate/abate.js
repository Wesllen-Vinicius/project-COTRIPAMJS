import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import Header from "../../../components/header/index";
import Footer from "../../../components/footer/footer";

function Abate() {
  const [resumo, setResumo] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [pesquisa, setPesquisa] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/api/resumo/abate").then((response) => {
      setResumo(response.data);
    });
  }, []);

  const Pesquisa = () => {
    axios
      .post("http://localhost:3001/api/abate", {
        data_dia: pesquisa,
      })
      .then((response) => {
        setMensagem(response.data.message);
      })
      .catch((err) => {
        setMensagem(err.data.message);
      });
  };
  return (
    <div>
      <Header />
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {useSelector((state) => state.usuarioLogado || state.usuarioAdmin) ===
        0 ? (
          <Redirect to="/" />
        ) : null}
        {useSelector(
          (state) => state.usuarioLogado === 1 || state.usuarioLogado
        ) > 0 ? (
          <Redirect to="/Encarregado" />
        ) : null}
        <div class="container-fluid">
          <Link class="navbar-brand" to="/Resumos">
            Resumos
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/Abate">
                  Abate
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/Serosa">
                  Serosa
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/TripaCozida">
                  Tripa Cozida
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/Produto">
                  Produtos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="col-md-2 col-sm-12 mx-auto">
        <div class="row">
          <label for="ativos" class="form-label">
            Pesquisa
          </label>
          <input
            onChange={(e) => setPesquisa(e.target.value)}
            valuetype="text"
            class="form-control"
          />
        </div>
      </div>
      {mensagem}
      <div class="tabela mt-3 table-responsive ">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Abate</th>
              <th scope="col">Bois abatidos</th>
              <th scope="col">Vacas</th>
              <th scope="col">Condenados</th>
              <th scope="col">Total</th>
              <th scope="col">Unidade</th>
              <th scope="col">Encarregado</th>
              <th scope="col">Data dia</th>
              <th scope="col">Data Cadastro</th>
            </tr>
          </thead>

          {resumo.map((val) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.abate}</td>
                  <td>{val.bois_abate}</td>
                  <td>{val.vacas_abate}</td>
                  <td>{val.condenados}</td>
                  <td>{val.total}</td>
                  <td>{val.unidade_abate}</td>
                  <td>{val.encarregado}</td>
                  <td>{val.data_dia}</td>
                  <td>{val.data}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
}
export default Abate;
