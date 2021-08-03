import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/header/index";
import Footer from "../../components/footer/footer";

function Resumos() {
  return (
    <div>
      <Header />
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {useSelector((state) => state.usuarioLogado || state.usuarioAdmin) ===
        0 ? (
          <Redirect to="/" />
        ) : null}
        {useSelector(
          (state) => state.usuarioLogado === 1 || state.usuarioLogado
        ) > 0 ? (
          <Redirect to="/Encarregado" />
        ) : null}
        <div class="container-fluid">
          <Link class="navbar-brand" to="/Resumos">
            Resumos
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/Abate">
                  Abate
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/Serosa">
                  Serosa
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/TripaCozida">
                  Tripa Cozida
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/Produto">
                  Produtos
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/Resumo/TripaDeExportacao">
                  Tripa de Expotação
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Footer />
    </div>
  );
}
export default Resumos;
