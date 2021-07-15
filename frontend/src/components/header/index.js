import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';

function Header()  {
  const dispatch = useDispatch ();
    return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <Link class="navbar-brand" href="/Encarregado">COTRIPAM INDCOM</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
      <li class="nav-item">
          <Link class="nav-link"  to="/Resumos">Resumos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/Encarregado">Resumo diario</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/produtos">Produtos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/CadastroEncarregado">Cadastro De Encarregados</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="/Faltas">Faltas</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" onClick={() => dispatch({ type: "LOG_OUT" || "LOG_OUT_ADMIN" })}>Sair</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
};
export default Header;