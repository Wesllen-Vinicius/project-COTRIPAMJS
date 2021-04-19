import React from 'react'
import isAuthenticated from './auth'
import {BrowserRouter as Redirect, Route} from 'react-router-dom';
const PrivateRoute = props => isAuthenticated()
        ? <Route { ...props }/>
        : <Redirect to='/'/>

export default PrivateRoute