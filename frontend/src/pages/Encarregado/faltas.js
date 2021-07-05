import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Header from '../../components/header';
import Footer from '../../components/footer/footer';

function Faltas (){
  const[ativos, setAtivos] = useState("")
  const[trabalhou, setTrabalhou] = useState("")
  const[dataDiariaFaltas, setDataFaltas] = useState("")
  const[nomeCompleto, setNomeFuncionario] = useState("")
  const[obs, setObsFuncionario] = useState("")


  
  return(
    <div>
     {useSelector((state) => state.usuarioLogado || state.usuarioAdmin)>0 ? (<Redirect to="/Encarregado"/>):null}     
    <Header/>
    <form>
      <div class="card mgTopRow ">
        <h5 class="card-header">Faltas e Observações</h5>
        <div class="card-body">
          <div class="row">
             <div class="col-md-2 col-sm-12">
                <label for="ativos" class="form-label">Ativos</label>
                <input onChange={(e) => setAtivos(e.target.value)} valuetype="number" class="form-control" id="ativos" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="trabalhou" class="form-label">Trabalhou</label>
               <input onChange={(e) => setTrabalhou(e.target.value)} type="number" class="form-control" id="trabalhou" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
                <label for="dataDiariaFaltas" class="form-label">Data</label>
                <input onChange={(e) => setDataFaltas(e.target.value)} type="date" class="form-control" id="dataDiaria"/>
              </div> 
          </div>
          <div class="row">
          <div class="col-md-3 col-sm-12">
               <label for="nomeCompleto" class="form-label">Nome Completo</label>
               <input onChange={(e) => setNomeFuncionario(e.target.value)} type="text" class="form-control" id="nomeCompleto" placeholder="Nome Completo"/>
             </div>
             <div class="col-md col-sm-12">
               <label for="obs" class="form-label">Observações</label>
               <input onChange={(e) => setObsFuncionario(e.target.value)} type="text" class="form-control" id="obs" placeholder="Obs"/>
             </div> 
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-1 col-sm-12">
                <input  type="button" class="btn btn-success" value="enviar" id="enviarFaltas" />
            </div>
          </div>
        </div>
      </div>
    </form> 
    <Footer/> 
</div>
 );
}
export default Faltas;