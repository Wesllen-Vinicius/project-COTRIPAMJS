import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import "./login.css";
import Axios from "axios";


function Login (){

  const dispatch = useDispatch ();

  const [email,setEmail] = useState ('');
  const [senha,setSenha] = useState ('');
  const [mensagem,setMensagem] = useState ('');
  const [admin, setAdmin] = useState (true);
  const history = useHistory();

  function logar() {
    if (email === "" || senha === "") {
      setMensagem("Usuário/senha não informados!!");
    } else if(admin === true){
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
      <input type="email" id="Login" class="fadeIn second" name="login" placeholder="Usuario" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" id="Senha" class="fadeIn third" name="senha" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
      <input type="button" class="fadeIn fourth" value="Logar" onClick={logar} />
      <div class=" form-switch">
      <input class="form-check-input me-2 " type="checkbox" id="flexSwitchCheckDefault" onChange = {(e) => setAdmin({admin: !admin.admin})} defaultChecked={admin} />
      <label class="form-check-label " for="flexSwitchCheckDefault">Logar como ADM</label>
      
      </div>
      <p>{mensagem}</p>
    </form>
    <div id="formFooter">
    </div>
  </div>
</div>
)
};
export default Login;