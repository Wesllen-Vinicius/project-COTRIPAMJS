import React from 'react';
import './encarregado.css'
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Encarregado = () => <div>
    <div >
    {useSelector((state) => state.usuarioLogado)===0 ? (<Redirect to="/"/>):null}
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark barratopo">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/Encarregado">COTRIPAM INDCOM</Link>
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
          <Link class="nav-link" to="/produtos">Produtos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <form>
      <div class="card mgTopRow ">
        <h5 class="card-header">Controle Diario</h5>
        <div class="card-body">
          <div class="row">
             <div class="col-md-2 col-sm-12">
                <label for="abate" class="form-label">Abate</label>
                <input type="value" class="form-control" id="abate" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="boi" class="form-label">Bois Abatidos</label>
               <input type="value" class="form-control" id="boi" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="condenados" class="form-label">Condenados</label>
               <input type="value" class="form-control" id="condenados" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="630" class="form-label">630</label>
               <input type="value" class="form-control" id="630" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="470" class="form-label">470</label>
               <input type="value" class="form-control" id="470" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="320" class="form-label">320</label>
               <input type="value" class="form-control" id="320" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="170" class="form-label">170</label>
               <input type="value" class="form-control" id="170" placeholder="0"/>
             </div>
          </div>
          <div class="row mgTopRow">
              <div class="col-md-1 col-sm-12">
                <label for="culatra" class="form-label">Culatra</label>
                <input type="value" class="form-control" id="culatra" placeholder="0"/>
              </div>
              <div class="col-md-1 col-sm-12">
                <label for="abomaso" class="form-label">Abomaso</label>
                <input type="value" class="form-control" id="abomaso" placeholder="0"/>
              </div>
              <div class="col-md-1 col-sm-12">
                <label for="fundo" class="form-label">Fundo</label>
                <input type="value" class="form-control" id="fundo" placeholder="0"/>
              </div>
              <div class="col-md-2 col-sm-12">
                <label for="tripaGrossa" class="form-label">Tripa G.</label>
                <input type="value" class="form-control" id="tripaGrossa" placeholder="0"/>
              </div>
              <div class="col-md-2 col-sm-12">
                <label for="tripaFina" class="form-label">Tripa F.</label>
                <input type="value" class="form-control" id="tripaFina" placeholder="0"/>
              </div>
              <div class="col-md-3 col-sm-12">
                <label for="dataDiaria" class="form-label">Data</label>
                <input type="date" class="form-control" id="dataDiaria"/>
              </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-1 col-sm-12">
                <input type="submit" class="btn btn-success" value="enviar" id="enviar" />
            </div>
          </div>
        </div>
      </div>
    </form>  
  </div>
</div>;
export default Encarregado;