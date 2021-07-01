import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import React from 'react';

function Adm ()  {

    return (
    <div>
    {useSelector((state) => state.usuarioLogado)===0 ? (<Redirect to="/"/>):null}   
    <h1> Admin </h1>
    
    </div>
    )
};
export default Adm;
