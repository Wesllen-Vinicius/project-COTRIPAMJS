import './App.css';
import { Encarregado } from './encarregado';
import Route from './routes';

const App = () =>
<div> 
<nav class="navbar navbar-expand-lg navbar-dark bg-dark barratopo">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">COTRIPAM INDCOM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li class="nav-item">
          <a class="nav-link"  href="#">Resumo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Faltas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Produtos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Encarregado/>
</div> 
export default App;
