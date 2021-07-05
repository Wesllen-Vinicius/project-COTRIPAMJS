import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios'

import Header from '../../components/header/index'
import Footer from '../../components/footer/footer';

function Resumos(){
const [resumo ,  setResumo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/resumo").then(response => {
          setResumo(response.data);
        });
      }, []);
    return(
<div>
<Header/>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
{useSelector((state) =>  state.usuarioLogado === 1 || state.usuarioLogado)>0 ? (<Redirect to="/Encarregado"/>):null}   
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Resumos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " >Abate</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Serosa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Tripa Cozida</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" tabindex="-1" >Produto Quimico</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Abate</th>
      <th scope="col">Bois abatidos</th>
      <th scope="col">Vacas</th>
      <th scope="col">Condenados</th>
      <th scope="col">630</th>
      <th scope="col">470</th>
      <th scope="col">320</th>
      <th scope="col">170</th>
      <th scope="col">Culatra</th>
      <th scope="col">Abomaso</th>
      <th scope="col">Fundo</th>
      <th scope="col">T Fina</th>
      <th scope="col">T Grossa</th>
      <th scope="col">Total</th>
      <th scope="col">Data do dia</th>
      <th scope="col">Data cadastro</th>
      <th scope="col">Encarregado</th>
    </tr>
  </thead>
  
      {resumo.map(val => {
          return(
            <tbody>
    <tr>
      <th scope="row">{val.id}</th>
      <td>{val.abate}</td>
      <td>{val.bois_abate}</td>
      <td>{val.vacas_abate}</td>
      <td>{val.condenados}</td>
      <td>{val.primeiro_corte}</td>
      <td>{val.segundo_corte}</td>
      <td>{val.terceiro_corte}</td>
      <td>{val.quarto_corte}</td>
      <td>{val.culatra}</td>
      <td>{val.abomaso}</td>
      <td>{val.fundo}</td>
      <td>{val.tripa_grossa}</td>
      <td>{val.tripa_fina}</td>
      <td>{val.total}</td>
      <td>{val.data_dia}</td>
      <td>{val.data}</td>
      <td>{val.cod_encarregado}</td>


    </tr>
        
  </tbody>
          );
      })}
   
</table>
<Footer/>
</div>
    );
}
export default Resumos;
