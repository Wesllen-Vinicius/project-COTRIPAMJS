import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../src/store";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./pages/Login/index";
import Encarregado from "../src/pages/Encarregado/index";
import Adm from "../src/pages/Adm/adm";

import Produtos from "./pages/Encarregado/produtos";
import Resumos from "./pages/Encarregado/resumo";
import Abate from "./pages/Resumos/Abate/abate";
import Serosa from "./pages/Resumos/Serosa/Serosa";
import TripaCozida from "./pages/Resumos/TripaCozida/TripaCozida";
import Produto from "./pages/Resumos/Produto/Produto";
import CadastroEncarregado from "./pages/Encarregado/CadastroEncarregados";
import TripaDeExportacao from "./pages/TripaDeExportacao/TripaDeExpotacao";
import CadastroUnidade from "./pages/unidade/Index";
import TripaExpotacaoResumo from "./pages/Resumos/TripaDeExportcao/index";

import Estoque from "./pages/Estoque/Index";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/Resumos" component={Resumos} />
          <Route exact path="/Encarregado" component={Encarregado} />
          <Route exact path="/Adm" component={Adm} />
          <Route exact path="/Produtos" component={Produtos} />
          <Route exact path="/Resumo/Abate" component={Abate} />
          <Route exact path="/Resumo/Serosa" component={Serosa} />
          <Route exact path="/Resumo/Produto" component={Produto} />
          <Route
            exact
            path="/Resumo/TripaDeExportacao"
            component={TripaExpotacaoResumo}
          />
          <Route exact path="/Resumo/TripaCozida" component={TripaCozida} />
          <Route
            exact
            path="/CadastroEncarregado"
            component={CadastroEncarregado}
          />
          <Route exact path="/CadastroUnidade" component={CadastroUnidade} />
          <Route
            exact
            path="/TripaDeExportacao"
            component={TripaDeExportacao}
          />
          <Route exact path="/Estoque" component={Estoque} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
