import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import "./header.css";
import {ImMenu} from 'react-icons/im'

function Header()  {
  const dispatch = useDispatch ();
    return (
    <div>
    <nav class="navbar navbar-expand-lg  back">
    <div class="container-fluid">
    <Link class="navbar-brand" href="/Encarregado">COTRIPAM INDCOM</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span><ImMenu size={30}/></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        {useSelector((state) => state.usuarioAdmin === 1) ?(
          <>
          <li class="nav-item">
          <Link class="nav-link"  to="/Resumos">Resumos</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to="/CadastroEncarregado">Cadastro De Encarregados</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link"  to="/Encarregado">Resumo diario</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/produtos">Produtos</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/TripaDeExportacao">Tripa De Exportação</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Estoque">Estoque</Link>
      </li>
      
        
        <li class="nav-item">
          <Link class="nav-link" to="/Faltas">Faltas</Link>
        </li>
          
         
        </>):(
          <>
          <li class="nav-item">
        <Link class="nav-link"  to="/Encarregado">Resumo diario</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/produtos">Produtos</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/TripaDeExportacao">Tripa De Exportação</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/TripaDeExportacao">Estoque</Link>
      </li>
      
        
        <li class="nav-item">
          <Link class="nav-link" to="/Faltas">Faltas</Link>
        </li>
          </>
        
        )}
       
        <li class="nav-item">
        <Link class="nav-link" onClick={() => dispatch({ type: "LOG_OUT" })}>Sair</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
};
export default Header;