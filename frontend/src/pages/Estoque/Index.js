import React, { useState, useEffect } from "react";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";

function Estoque() {
  const [tripaReta, setTripaReta] = useState("");
  const [tripaTorta, setTripaTorta] = useState("");
  const [tripaTorta2C, setTripaTorta2C] = useState("");
  const [culatra, setCulatra] = useState("");
  const [fundo, setFundo] = useState("");
  const [dataDia, setDataDia] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [resumo, setResumo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/total/serosa").then((response) => {
      setResumo(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {useSelector((state) => state.usuarioLogado || state.usuarioAdmin) ===
      0 ? (
        <Redirect to="/" />
      ) : null}
      <Header />
      <div class="tabela mt-3 table-responsive ">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Unidade</th>
              <th scope="col">Tripa Cozida</th>
              <th scope="col">Serosa</th>
              <th scope="col">Tripa de Expotação</th>
            </tr>
          </thead>
          {resumo.map((val) => {
            return (
              <tbody>
                <tr>
                  <td>{val.total}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div class="row mx-auto my-2 pe-2">
        <div class="col-md-2 col-sm-12">
          <label for="ativos" class="form-label">
            Tripa Cozida
          </label>
          <input valuetype="number" class="form-control" placeholder="0" />
        </div>
        <div class="col-md-2 col-sm-12">
          <label for="ativos" class="form-label">
            Serosa
          </label>
          <input valuetype="number" class="form-control" placeholder="0" />
        </div>
        <div class="col-md-2 col-sm-12">
          <label for="ativos" class="form-label">
            Tripa de Exportação
          </label>
          <input valuetype="number" class="form-control" placeholder="0" />
        </div>
      </div>
      <div>
        <h1 class="ms-5">Saida</h1>
      </div>
      <div class="tabela mt-3 table-responsive ">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Unidade</th>
              <th scope="col">Tripa Cozida</th>
              <th scope="col">Serosa</th>
              <th scope="col">Tripa de Expotação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
export default Estoque;
