import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import "./login.css";

function Login (){

  const Dispatch = useDispatch ();

  const [email,setEmail] = useState ('');
  const [senha,setSenha] = useState ('');

  
  
  return (
    <div class="wrapper fadeInDown">
      {useSelector((state) => state.usuarioLogado)>0 ? (<Redirect to="/Encarregado"/>):null}     
    <div id="formContent">
    <div class="fadeIn first">   
    <div>  COTRIPAM INDCOM </div>
    </div>
    <form>
      <input type="email" id="Login" class="fadeIn second" name="login" placeholder="Usuario" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" id="Senha" class="fadeIn third" name="senha" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
      <input type="button" class="fadeIn fourth" value="Logar" />
    </form>
    <div id="formFooter">
    </div>
  </div>
</div>
)
};
export default Login;