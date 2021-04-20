import React, { useState } from 'react';
import './encarregado.css'
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

import firebase from '../../config/firebase';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';

function Encarregado () {
    const[abate, setAbate] = useState("")
    const[bois, setBois] = useState("")
    const[condenados, setCondenados] = useState("")
    const[primeiro, setPrimeiro] = useState("")
    const[segundo, setSegundo] = useState("")
    const[terceiro, setTerceiro] = useState("")
    const[quarto, setQuarto] = useState("")
    const[culatra, setCulatra] = useState("")
    const[abomaso, setAbomaso] = useState("")
    const[fundo, setFundo] = useState("")
    const[tripaGrossa, setTpgrossa] = useState("")
    const[tripaFina, setTpfina] = useState("")
    const[dataDiaria, setDataDiaria] = useState("")

    const db = firebase.firestore()

    function gravarResumo (){
      db.collection("resumo").add({abate: abate, bois: bois, 
        condenados: condenados, primeiro: 630 * primeiro,
        segundo: 470 * segundo, terceiro: 320 * terceiro, quarto: 170 * quarto,
        culatra: culatra, abomaso: abomaso, fundo: fundo, 
        tripaGrossa: tripaGrossa, tripaFina: tripaFina,
        dataDiaria: dataDiaria,
      })
    }

    return ( 
    <div>
    <div >
    {useSelector((state) => state.usuarioLogado)===0 ? (<Redirect to="/"/>):null}
    <Header/>
    <form>
      <div class="card mgTopRow ">
        <h5 class="card-header">Controle Diario</h5>
        <div class="card-body">
          <div class="row">
             <div class="col-md-2 col-sm-12">
                <label for="abate" class="form-label">Abate</label>
                <input onChange={(e) => setAbate(e.target.value)} type="number" class="form-control" id="abate" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="boi" class="form-label">Bois Abatidos</label>
               <input onChange={(e) => setBois(e.target.value)} type="number" class="form-control" id="boi" placeholder="0"/>
             </div>
             <div class="col-md-2 col-sm-12">
               <label for="condenados" class="form-label">Condenados</label>
               <input onChange={(e) => setCondenados(e.target.value)} type="number" class="form-control" id="condenados" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="630" class="form-label">630</label>
               <input onChange={(e) => setPrimeiro(e.target.value)} type="number" class="form-control" id="630" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="470" class="form-label">470</label>
               <input onChange={(e) => setSegundo(e.target.value)} type="number" class="form-control" id="470" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="320" class="form-label">320</label>
               <input onChange={(e) => setTerceiro(e.target.value)} type="number" class="form-control" id="320" placeholder="0"/>
             </div>
             <div class="col-md-1 col-sm-12">
               <label for="170" class="form-label">170</label>
               <input onChange={(e) => setQuarto(e.target.value)} type="number" class="form-control" id="170" placeholder="0"/>
             </div>
          </div>
          <div class="row mgTopRow">
              <div class="col-md-1 col-sm-12">
                <label for="culatra" class="form-label">Culatra</label>
                <input onChange={(e) => setCulatra(e.target.value)} type="number" class="form-control" id="culatra" placeholder="0"/>
              </div>
              <div class="col-md-1 col-sm-12">
                <label for="abomaso" class="form-label">Abomaso</label>
                <input onChange={(e) => setAbomaso(e.target.value)} type="number" class="form-control" id="abomaso" placeholder="0"/>
              </div>
              <div class="col-md-1 col-sm-12">
                <label for="fundo" class="form-label">Fundo</label>
                <input  onChange={(e) => setFundo(e.target.value)} type="number" class="form-control" id="fundo" placeholder="0"/>
              </div>
              <div class="col-md-2 col-sm-12">
                <label for="tripaGrossa" class="form-label">Tripa G.</label>
                <input  onChange={(e) => setTpgrossa(e.target.value)} type="number" class="form-control" id="tripaGrossa" placeholder="0"/>
              </div>
              <div class="col-md-2 col-sm-12">
                <label for="tripaFina" class="form-label">Tripa F.</label>
                <input  onChange={(e) => setTpfina(e.target.value)} type="number" class="form-control" id="tripaFina" placeholder="0"/>
              </div>
              <div class="col-md-3 col-sm-12">
                <label for="dataDiaria" class="form-label">Data</label>
                <input  onChange={(e) => setDataDiaria(e.target.value)} type="date" class="form-control" id="dataDiaria"/>
              </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-md-1 col-sm-12">
                <input onClick={gravarResumo} type="button" class="btn btn-success" value="enviar" id="enviar" />
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
export default Encarregado;