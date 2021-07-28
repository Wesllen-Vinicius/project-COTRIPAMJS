import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from "axios";
import {FaExclamationTriangle} from 'react-icons/fa'
import Header from "../../components/header";
import Footer from "../../components/footer/footer";



function CadastroUnidade(){

    const [nome, setNome] = useState("");
    const [Meta_serosa , setMeta_serosa] = useState("");
    const [Meta_Tripacozida, setMeta_TripaCozida] = useState("");
    const[mensagem , setMensagem] = useState("")


    const cadastrarUnidade = () => {
        axios.post("http://localhost:3001/api/casUnidade", {
          nome_unidade:nome,
          meta_serosa:Meta_serosa,
          meta_tripaCozida:Meta_Tripacozida,
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
            <h5 class="card-header">Cadastro de Unidade</h5>
            <div class="card-body">
            <div class="row">
            <div class="col-md-2 col-sm-12">
                <label for="nome" class="form-label">Nome</label>
                <input  onChange={(e) => setNome(e.target.value)} type="text" class="form-control"  placeholder="Nome"/>
             </div>
            
             <div class="col-md-2 col-sm-12">
               <label for="cpf" class="form-label">Meta Serosa</label>
               <input onChange={(e) => setMeta_serosa(e.target.value)} type="text" class="form-control"  placeholder="90,00"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="data_nascimento" class="form-label">Meta Tripa cozida</label>
               <input onChange={(e) => setMeta_TripaCozida(e.target.value)} type="number" class="form-control" placeholder="4,00"/>
             </div>
             </div>
             </div>
             <div class="card-footer">
              <div class="row">
             <div class="col-md-1 col-sm-12">
                <input  type="button" class="btn btn-success" value="Enviar" id="enviar" onClick={cadastrarUnidade} />
            </div>
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
             <Footer/>
          </div>
             
    );
}
export default CadastroUnidade;