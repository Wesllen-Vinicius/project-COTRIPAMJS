import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";

function TripaDeExportacao() {
  const [tripaReta, setTripaReta] = useState("");
  const [tripaTorta, setTripaTorta] = useState("");
  const [tripaTorta2C, setTripaTorta2C] = useState("");
  const [culatra, setCulatra] = useState("");
  const [fundo, setFundo] = useState("");
  const [dataDia, setDataDia] = useState("");
  const [mensagem, setMensagem] = useState("");

  const Encarregado_Nome = useSelector((state) => state.usuarioEmail);
  const Encarregado_Unidade = useSelector((state) => state.usuarioUnidade);

  const cadastrarTripaExportacao = () => {
    axios
      .post("http://localhost:3001/api/tripaExportacao", {
        tripa_reta: tripaReta,
        tripa_torta1c: tripaTorta,
        tripa_torta2c: tripaTorta2C,
        encarregado: Encarregado_Nome,
        unidade_exportacao: Encarregado_Unidade,
        culatra: culatra,
        fundo: fundo,
        data_dia: dataDia,
        data: new Date().toLocaleDateString("pt-BR"),
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
      {useSelector((state) => state.usuarioLogado || state.usuarioAdmin) ===
      0 ? (
        <Redirect to="/" />
      ) : null}

      <Header />
      <form>
        <div class="card mgTopRow ">
          <h5 class="card-header">Cadastro de Tripa De Expotação</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-md-2 col-sm-12">
                <label for="tripaReta" class="form-label">
                  Tripa Reta
                </label>
                <input
                  type="number"
                  class="form-control"
                  onChange={(e) => setTripaReta(e.target.value)}
                  id="tripaReta"
                  placeholder="0"
                />
              </div>
              <div class="col-md-2 col-sm-12">
                <label for="tripaTorta1c" class="form-label">
                  Tripa Torta 1C
                </label>
                <input
                  type="number"
                  class="form-control"
                  onChange={(e) => setTripaTorta(e.target.value)}
                  id="tripaTorta1c"
                  placeholder="0"
                />
              </div>
              <div class="col-md-2 col-sm-12">
                <label for="tripaTorta2c" class="form-label">
                  Tripa Torta 2C
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="tripaTorta2c"
                  onChange={(e) => setTripaTorta2C(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div class="col-md-1 col-sm-12">
                <label for="culatra" class="form-label">
                  Culatra
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="culatra"
                  onChange={(e) => setCulatra(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div class="col-md-1 col-sm-12">
                <label for="fundo" class="form-label">
                  Fundo
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="fundo"
                  onChange={(e) => setFundo(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div class="col-md-2 col-sm-12">
                <label for="fundo" class="form-label">
                  Data
                </label>
                <input
                  type="date"
                  class="form-control"
                  onChange={(e) => setDataDia(e.target.value)}
                />
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
                  onClick={cadastrarTripaExportacao}
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
            <div
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
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
        </div>
      </form>
      <Footer />
    </div>
  );
}
export default TripaDeExportacao;
