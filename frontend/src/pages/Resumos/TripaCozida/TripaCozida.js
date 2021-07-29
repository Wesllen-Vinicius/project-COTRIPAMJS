import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import Header from "../../../components/header/index";
import Footer from "../../../components/footer/footer";

function TripaCozida() {
  const [resumo, setResumo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/resumo/tripaCozida")
      .then((response) => {
        setResumo(response.data);
      });
  }, []);
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
      <div class="tabela mt-3 table-responsive ">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Mocoto</th>
              <th scope="col">Culatra</th>
              <th scope="col">Abomaso</th>
              <th scope="col">Fundo</th>
              <th scope="col">Tripa Grossa</th>
              <th scope="col">Tripa Fina</th>
              <th scope="col">Total</th>
              <th scope="col">Media</th>
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
                  <td>{val.mocoto}</td>
                  <td>{val.culatra}</td>
                  <td>{val.abomaso}</td>
                  <td>{val.fundo}</td>
                  <td>{val.tripa_grossa}</td>
                  <td>{val.tripa_fina}</td>
                  <td>{val.total}</td>
                  <td>{val.media}</td>
                  <td>{val.unidade_tripaCozida}</td>
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
export default TripaCozida;
