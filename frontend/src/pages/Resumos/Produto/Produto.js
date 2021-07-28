import React, { useState, useEffect } from 'react';
import {Redirect, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios'

import Header from '../../../components/header/index'
import Footer from '../../../components/footer/footer';

function Produto(){
const [resumo ,  setResumo] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/api/resumo/produtos").then(response => {
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
<div class="tabela mt-3 table-responsive ">
<table class="table table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Sal Fino</th>
      <th scope="col">Sal Grosso</th>
      <th scope="col">Metab</th>
      <th scope="col">Perox</th>
      <th scope="col">BB</th>
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
      <td>{val.sal_fino}</td>
      <td>{val.sal_grosso}</td>
      <td>{val.metab}</td>
      <td>{val.perox}</td>
      <td>{val.bb}</td>
      <td>{val.total}</td>
      <td>{val.data_dia}</td>
      <td>{val.data}</td>
     


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
export default Produto;