import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Faltas = () => <div>
    {useSelector((state) => state.usuarioLogado)===0 ? (<Redirect to="/"/>):null}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark barratopo">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/Encarregado">COTRIPAM INDCOM</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item">
          <Link class="nav-link"  to="/Encarregado">Resumo</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Faltas">Faltas</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Produtos">Produtos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <form>
      <div class="card mgTopRow ">
        <h5 class="card-header">Faltas e Observações</h5>
        <div class="card-body">
          <div class="row">
             <div class="col-md-2 col-sm-12">
                <label for="ativos" class="form-label">Ativos</label>
                <input valuetype="value" class="form-control" id="ativos" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="trabalhou" class="form-label">Trabalhou</label>
               <input type="value" class="form-control" id="trabalhou" placeholder="0"/>
             </div>
             <div class="col-md-3 col-sm-12">
               <label for="nomeCompleto" class="form-label">Nome Completo</label>
               <input type="text" class="form-control" id="nomeCompleto" placeholder="Nome Completo"/>
             </div>
             <div class="col-md col-sm-12">
               <label for="obs" class="form-label">Observações</label>
               <input type="text" class="form-control" id="obs" placeholder="Obs"/>
             </div> 
             <div class="col-md-2 col-sm-12">
                <label for="dataDiaria" class="form-label">Data</label>
                <input type="date" class="form-control" id="dataDiaria"/>
              </div> 
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-1 col-sm-12">
                <input type="submit" class="btn btn-success" value="enviar" id="enviarFaltas" />
            </div>
          </div>
        </div>
      </div>
    </form>  
</div>
export default Faltas;