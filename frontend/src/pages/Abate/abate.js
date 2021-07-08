import React, { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios'

import Header from '../../components/header/index'
import Footer from '../../components/footer/footer';

function Abate(){
const [resumo ,  setResumo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/resumo/abate").then(response => {
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
        <Link class="nav-link " to="/Resumo/TripaCozida">Tripa Cozida</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link " to="/Resumo/Produto">Produtos</Link>
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
      <th scope="col">Total</th>
      <th scope="col">Data dia</th>
      <th scope="col">Data Cadastro</th>
      
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
      <td>{val.total}</td>
      <td>{val.data_dia}</td>
      <td>{val.data}</td>
     


    </tr>
        
  </tbody>
          );
      })}
   
</table>
<Footer/>
</div>
    );
}
export default Abate;