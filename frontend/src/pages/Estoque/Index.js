import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";

function Estoque() {
  const [resumo, setResumo] = useState([]);
  const [total, setTotal] = useState([]);
  const Encarregado_Unidade = useSelector((state) => state.usuarioUnidade);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/total/estoque", {
        estoque_unidade: Encarregado_Unidade,
      })
      .then((response) => {
        setTotal(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/resumo/estoqueTotal", {
        estoque_unidade: Encarregado_Unidade,
      })
      .then((response) => {
        setResumo(response.data);
      });
  }, []);

  const atualizar = () => {
    const soma = total.map((val) => {
      return {
        totalCozido: val.total,
        totalKM: val.totalKM,
      };
    });
    console.log(soma[0].totalKM, soma[0].totalCozido);

    axios.post("http://localhost:3001/api/casEstoqueTotal", {
      total_serosa: soma[0].totalKM,
      total_tripaCozida: soma[0].totalCozido,
      estoque_unidade: Encarregado_Unidade,
    });
  };

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
                  <td>{val.estoque_unidade}</td>
                  <td>{val.total_tripaCozida}</td>
                  <td>{val.total_serosa}</td>
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
          <button class="btn btn-primary" onClick={atualizar}>
            Atualizar
          </button>
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
