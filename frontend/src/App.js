import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../src/store";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./pages/Login/index";
import Encarregado from "../src/pages/Encarregado/index"
import Adm from "../src/pages/Adm/adm"
import Faltas from "./pages/Encarregado/faltas";
import Produtos from "./pages/Encarregado/produtos";
import Resumos from "./pages/Encarregado/resumo";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/Resumos" component={Resumos} />
          <Route exact path="/Encarregado" component={Encarregado} />
          <Route exact path="/Adm" component={Adm} />
          <Route exact path="/Faltas" component={Faltas} />
          <Route exact path="/Produtos" component={Produtos} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
