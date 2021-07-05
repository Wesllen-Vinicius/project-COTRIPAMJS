import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios'

import Header from '../../components/header/index'
import Footer from '../../components/footer/footer';

function Produtos  (){

    const[salFino, setSalFino] = useState("")
    const[salGrosso, setSalGrosso] = useState("")
    const[metab, setMetab] = useState("")
    const[perox, setPerox] = useState("")
    const[bb, setBb] = useState("")
    const[dataDiaria, setDataProdutos] = useState("")
    const[mensagem, setMensagem] = useState("")


    const cadastrar = () => {
      axios.post("http://localhost:3001/api/produtos", {
        sal_fino:salFino,
        sal_grosso:salGrosso,
        perox:perox,
        metab:metab,
        data_dia:dataDiaria,
        data: new Date().toLocaleDateString("pt-BR"),
      })
        .then(response => {
          setMensagem(response.data.message);
        })
        .catch(err => {
          setMensagem(err.data.message);
        });
    };
    
    return (
    <div>
    {useSelector((state) => state.usuarioLogado)===0 ? (<Redirect to="/"/>):null}
    <Header/>
    <form>
      <div class="card mgTopRow ">
        <h5 class="card-header">Produtos Quimicos</h5>
        <div class="card-body">
          <div class="row">
             <div class="col-md-2 col-sm-12">
                <label for="salFino" class="form-label">Sal Fino</label>
                <input  onChange={(e) => setSalFino(e.target.value)} type="number" class="form-control" id="salFino" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="salGrosso" class="form-label">Sal Grosso</label>
               <input onChange={(e) => setSalGrosso(e.target.value)} type="number" class="form-control" id="salGrosso" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="metab" class="form-label">Metab.</label>
               <input onChange={(e) => setMetab(e.target.value)} type="number" class="form-control" id="metab" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="perox" class="form-label">Perox</label>
               <input onChange={(e) => setPerox(e.target.value)} type="number" class="form-control" id="perox" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="bb" class="form-label">BB</label>
               <input onChange={(e) => setBb(e.target.value)} type="number" class="form-control" id="bb" placeholder="0"/>
             </div>  
             <div class="col-md-3 col-sm-12">
                <label for="dataDiaria" class="form-label">Data</label>
                <input onChange={(e) => setDataProdutos(e.target.value)} type="date" class="form-control" id="dataDiaria"/>
              </div> 
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-1 col-sm-12">
                <input onClick={cadastrar} type="button" class="btn btn-success" value="enviar" id="enviarProdutos" />
            </div>
            <p>{mensagem}</p>
          </div>
        </div>
      </div>
    </form> 
    <Footer/> 
</div>
);
}
export default Produtos;