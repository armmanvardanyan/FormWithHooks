import React from 'react'
import Header from '../Header/header'
import {BrowserRouter, Route, } from 'react-router-dom'
import Register from '../Register/register'
import Login from '../Login/login'
import SecretPage from '../Profile/profile'
const App = () =>{
    return (
        <BrowserRouter>
                <Header/>
                <Route path='/login'  component = {Login} />
                <Route path='/register'
                    render = {()=>{return  <Register />}}
                    />
                <Route path='/profile' component = {SecretPage}/>
        </BrowserRouter>
    )
}

export default App