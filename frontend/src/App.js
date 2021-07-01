import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../src/store";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./pages/Login/index";
import Encarregado from "../src/pages/Encarregado/index"
import Adm from "../src/pages/Adm/adm"

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/Encarregado" component={Encarregado} />
          <Route exact path="/Adm" component={Adm} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
