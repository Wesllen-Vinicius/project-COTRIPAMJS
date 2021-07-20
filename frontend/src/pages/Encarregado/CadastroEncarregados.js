import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from "axios";
import {FaExclamationTriangle} from 'react-icons/fa'
import Header from "../../components/header";
import Footer from "../../components/footer/footer";
import './encarregado.css'


function CadastroEncarregado(){

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [CPF , setCPF] = useState("");
    const [dataNas, setDataNas] = useState("");
    const [unidade, setUnidade] = useState("");
    const[mensagem , setMensagem] = useState("")


    const cadastrarEncarregados = () => {
        axios.post("http://localhost:3001/api/casEncarregados", {
          nome:nome,
          cpf:CPF,
          senha:senha,
          unidade:unidade,
          data_nascimento:dataNas
        })
        .then(response => {
          setMensagem(response.data.message);
        })
        .catch(err => {
          setMensagem(err.data.message);
        });
    }

    return(
        <div>
            <Header/>
            {useSelector((state) => state.usuarioLogado || state.usuarioAdmin)===0 ?  (<Redirect to="/"/>):null} 
            {useSelector((state) =>  state.usuarioLogado === 1 || state.usuarioLogado)>0 ? (<Redirect to="/Encarregado"/>):null}   
            <h5 class="card-header">Cadastro de Encarregado</h5>
            <div class="card-body">
            <div class="row">
            <div class="col-md-2 col-sm-12">
                <label for="nome" class="form-label">Nome</label>
                <input  onChange={(e) => setNome(e.target.value)} type="text" class="form-control"  placeholder="Nome"/>
             </div>
             <div class="col-md-2 col-sm-12">
             <label for="inputPassword" class="col-sm-2 col-form-label">Senha</label>
               <input type="password" class="form-control" id="inputPassword" onChange={(e) => setSenha(e.target.value)}></input>
          
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="cpf" class="form-label">CPF</label>
               <input onChange={(e) => setCPF(e.target.value)} type="text" class="form-control"  placeholder="CPF"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="data_nascimento" class="form-label">Data De Nascimento</label>
               <input onChange={(e) => setDataNas(e.target.value)} type="date" class="form-control" placeholder="Data de Nacimento"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="unidade" class="form-label">Unidade</label>
               <input onChange={(e) => setUnidade(e.target.value)} type="text" class="form-control"  placeholder="Unidade"/>
             </div> 
             </div>
             <div class="card-footer">
              <div class="row">
             <div class="col-md-1 col-sm-12">
                <input  type="button" class="btn btn-success" value="enviar" id="enviar" onClick={cadastrarEncarregados} />
            </div>
            </div>
           
            {mensagem === "Cadastro realizado com sucesso!" ? ( <div class="alert alert-success" role="alert">
            <p>{mensagem}</p>
            </div>):null}
            {(mensagem === "Campos vazios!" ?(<div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="30" role="img" aria-label="Danger:"><FaExclamationTriangle size={20}/></svg>
            <div>
            <p>{mensagem}</p>
            </div>
            </div>):null)}
            </div>
            </div>
             <Footer/>
          </div>
             
    );
}
export default CadastroEncarregado;