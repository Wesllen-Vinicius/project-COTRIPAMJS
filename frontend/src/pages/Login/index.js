import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import "./login.css";
import Axios from "axios";
import {FaExclamationTriangle} from 'react-icons/fa'

function Login (){

  const dispatch = useDispatch ();

  const [email,setEmail] = useState ('');
  const [senha,setSenha] = useState ('');
  const [mensagem,setMensagem] = useState ('');
  const [check, setCheck] = useState(false);
  const history = useHistory();

  function logar() {
    if (email === "" || senha === "") {
      setMensagem("Usuário/senha não informados!!");
    } else if(check === true){
      Axios.post("http://localhost:3001/api/login/admin", {
        nome: email,
        senha: senha,
      }).then(response => {
        setMensagem(response.data.message);
        if (response.data.message === "Logado!") {
          dispatch({
            type: "LOG_IN_ADMIN",
            usuarioEmail: email,
          });
          history.push("/Encarregado");
        }
      });

    }
    
    else{
      Axios.post("http://localhost:3001/api/encarregados", {
        nome: email,
        senha: senha,
      }).then(response => {
        setMensagem(response.data.message);
        if (response.data.message === "Logado!") {
          dispatch({
            type: "LOG_IN",
            usuarioEmail: email,
          });
          history.push("/Encarregado");
        }
      });
    }
  }

  
  
  return (
    <div class="wrapper fadeInDown">
      {useSelector((state) => state.usuarioLogado || state.usuarioAdmin)>0 ? (<Redirect to="/Encarregado"/>):null}     
    <div id="formContent">

    <div class="fadeIn first">   
    
    <div>  COTRIPAM INDCOM </div>
    </div>
    <form>
      <input type="email" id="Login" class="fadeIn second Caixa" name="login" placeholder="Usuario" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" id="Senha" class="fadeIn third Caixa" name="senha" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
      <input type="button" class="fadeIn fourth" value="Logar" onClick={logar} />
      <div class=" form-switch">
      <input class="form-check-input me-2 mb-3 " type="checkbox" id="flexSwitchCheckDefault" onChange = {(e) => setCheck(e.target.checked)} />
      <label class="form-check-label " for="flexSwitchCheckDefault">Logar como ADM</label>
      
      </div>
     
    </form>
    <div id="formFooter">
      {mensagem === "Usuario não Existe!" ? (<div class="alert alert-danger  menssagem" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="30" role="img" aria-label="Danger:"><FaExclamationTriangle size={20}/></svg>
  <div>
  <p>{mensagem}</p>
  </div>
</div>): null}
{mensagem === "Usuário ou Senha incorretos!" ? (<div class="alert alert-danger  menssagem" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="30" role="img" aria-label="Danger:"><FaExclamationTriangle size={20}/></svg>
  <div>
  <p>{mensagem}</p>
  </div>
</div>): null}
    
           
    </div>
  </div>
</div>
)
};
export default Login;