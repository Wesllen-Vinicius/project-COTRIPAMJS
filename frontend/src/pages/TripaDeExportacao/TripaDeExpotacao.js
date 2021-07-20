import React, { useState } from 'react';

import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import axios from 'axios';
import {FaExclamationTriangle} from 'react-icons/fa'

function TripaDeExportacao () {

    const[tripaReta, setTripaReta] = useState("")
    const[tripaTorta, setTripaTorta] = useState("")
    
 return ( 
    <div>
      {useSelector((state) => state.usuarioLogado || state.usuarioAdmin)===0 ?  (<Redirect to="/"/>):null}
    <div >
   
    <Header/>
    <form>
      <div class="card mgTopRow ">
        <h5 class="card-header">Controle Diario</h5>
        <div class="card-body">
          <div class="row">
             <div class="col-md-2 col-sm-12">
                <label for="tripaReta" class="form-label">Tripa Reta</label>
                <input type="number" class="form-control" id="tripaReta" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="tripaTorta1c" class="form-label">Tripa Torta 1C</label>
               <input  type="number" class="form-control" id="tripaTorta1c" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="tripaTorta2c" class="form-label">Tripa Torta 2C</label>
               <input  type="number" class="form-control" id="tripaTorta2c" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="culatra" class="form-label">Culatra</label>
               <input type="number" class="form-control" id="culatra" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="fundo" class="form-label">Fundo</label>
               <input  type="number" class="form-control" id="fundo" placeholder="0"/>
             </div>
             <div class="card-footer">
          <div class="row">
            <div class="col-md-1 col-sm-12">
                <input  type="button" class="btn btn-success" value="enviar" id="enviar" />
                
            </div>
             </div>
             </div>
             </div>
             </div>
             </div>
             </form>
             </div>
             <Footer/>
             </div>
    ); 
}
export default TripaDeExportacao;