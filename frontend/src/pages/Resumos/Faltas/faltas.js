import React, { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios'

import Header from '../../../components/header/index'
import Footer from '../../../components/footer/footer';

function ResumoFaltas(){
const [resumo ,  setResumo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/resumo/faltas").then(response => {
          setResumo(response.data);
        });
      }, []);
    return(
<div>
<Header/>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
{useSelector((state) =>  state.usuarioLogado === 1 || state.usuarioLogado)>0 ? (<Redirect to="/Encarregado"/>):null}   
<div class="container-fluid">
    <Link class="navbar-brand" to="/Resumos">Resumos</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link " to="/Resumo/Abate">Abate</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Resumo/Serosa">Serosa</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Resumo/Faltas">Faltas</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Resumo/TripaCozida">Tripa Cozida</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Resumo/Produto">Produtos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="tabela mt-3 table-responsive ">
<table class="table table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Ativos</th>
      <th scope="col">Trabalhou</th>
      <th scope="col">Nome Completo</th>
      <th scope="col">Data dia</th>
      <th scope="col">Data Cadastro</th>
      <th scope="col">Observação</th>
      
    </tr>
  </thead>
  
      {resumo.map(val => {
          return(
            <tbody>
    <tr>
     
      <td>{val.ativos}</td>
      <td>{val.trabalhou}</td>
      <td>{val.nome_completo}</td>
      <td>{val.data_dia}</td>
      <td>{val.data}</td>
      <td>{val.observacao}</td>
     


    </tr>
        
  </tbody>
          );
      })}
   
</table>
</div>
<Footer/>
</div>
    );
}
export default ResumoFaltas;