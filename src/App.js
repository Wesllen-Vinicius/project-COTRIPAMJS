import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Encarregado from './pages/Encarregado'
import Login from './pages/Login'
import store from '../src/store/'
import {Provider} from 'react-redux'
import Adm from './pages/Adm/adm';
import Produtos from  './pages/Encarregado/produtos';
import PrivateRoute from './PrivateRoute';
import history from './history';
import Faltas from './pages/Encarregado/faltas'

function App () {
  return (
    <Provider store={store}>
    <Router history={history}>
    <Route exact path="/"  component={Login}/>
    <Route exact path="/Encarregado"  component={Encarregado}/>
    <Route exact path="/Produtos"  component={Produtos}/>
    <Route exact path="/Faltas" component={Faltas}/>
    <PrivateRoute exact path="/Adm"  component={Adm}/>
    </Router>
    </Provider>
    )
}

export default App;
