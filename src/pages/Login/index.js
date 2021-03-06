import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import "./login.css";
import firebase from '../../config/firebase';
import { HiFingerPrint } from 'react-icons/hi';
function Login (){

  const Dispatch = useDispatch ();

  const [email,setEmail] = useState ('');
  const [senha,setSenha] = useState ('');

  function Logar(){firebase.auth().signInWithEmailAndPassword(email,senha).then((history) => {Dispatch({type:"Logue_In",usuarioEmail:email})}).catch(Error)};
  
  return (
    <div class="wrapper fadeInDown">
      {useSelector((state) => state.usuarioLogado)>0 ? (<Redirect to="/Encarregado"/>):null}     
    <div id="formContent">
    <div class="fadeIn first">   
    <div><HiFingerPrint size={50} /> COTRIPAM INDCOM </div>
    </div>
    <form>
      <input type="email" id="Login" class="fadeIn second" name="login" placeholder="Usuario" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" id="Senha" class="fadeIn third" name="senha" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
      <input type="button" class="fadeIn fourth" value="Logar" onClick={Logar}/>
    </form>
    <div id="formFooter">
    </div>
  </div>
</div>
)
};
export default Login;