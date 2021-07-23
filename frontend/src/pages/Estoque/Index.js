import React, { useState } from 'react';

import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import axios from 'axios';
import {FaExclamationTriangle} from 'react-icons/fa'

function Estoque () {

    const[tripaReta, setTripaReta] = useState("")
    const[tripaTorta, setTripaTorta] = useState("")
    const[tripaTorta2C, setTripaTorta2C] = useState("")
    const[culatra, setCulatra] = useState("")
    const[fundo, setFundo] = useState("")
    const[dataDia, setDataDia] = useState("")
    const [mensagem, setMensagem] = useState("")

    const cadastrarTripaExportacao= () => {
      axios.post("http://localhost:3001/api/tripaExportacao", {
        tripa_reta:tripaReta,
        tripa_torta1c:tripaTorta,
        tripa_torta2c:tripaTorta2C,
        culatra:culatra,
        fundo:fundo,
        data_dia:dataDia,
        data: new Date().toLocaleDateString("pt-BR")
      })
      .then(response => {
        setMensagem(response.data.message);
      })
      .catch(err => {
        setMensagem(err.data.message);
      });
    }
    
 return ( 
    <div>
      {useSelector((state) => state.usuarioLogado || state.usuarioAdmin)===0 ?  (<Redirect to="/"/>):null}
    <Header/>
    <div class="tabela mt-3 table-responsive ">
<table class="table table-hover">
  <thead class="thead-dark">
    <tr>
    <th scope="col">Unidade</th>
      <th scope="col">Tripa Cozida</th>
      <th scope="col">Serosa</th>
      <th scope="col">Tripa de Expotação</th>
      
      
    </tr>
  </thead>
  
   
<tbody>
    <tr>
     
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    


    </tr>
        
  </tbody>
    
    
   
</table>
</div>
<div class="row">
<div class="col-md-2 col-sm-12">
                <label for="ativos" class="form-label">Tripa Cozida</label>
                <input  valuetype="number" class="form-control" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
                <label for="ativos" class="form-label">Serosa</label>
                <input valuetype="number" class="form-control" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
                <label for="ativos" class="form-label">Tripa de Exportação</label>
                <input  valuetype="number" class="form-control"  placeholder="0"/>
             </div>
</div>

<div class="tabela mt-3 table-responsive ">
<table class="table table-hover">
  <thead class="thead-dark">
    <tr>
    <th scope="col">Unidade</th>
      <th scope="col">Tripa Cozida</th>
      <th scope="col">Serosa</th>
      <th scope="col">Tripa de Expotação</th>
      
      
    </tr>
  </thead>
  
   
<tbody>
    <tr>
     
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    


    </tr>
        
  </tbody>
    
    
   
</table>
</div>
  
             <Footer/>
             </div>
    ); 
}
export default Estoque;