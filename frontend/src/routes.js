import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main/index'
import Cadastrar from './pages/cadastrar/index'
import Detalhar from './pages/detalhar/index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/noticias" component={Cadastrar}></Route>
        <Route exact path="/noticias/:id" component={Detalhar}></Route>
      </Switch>
    </BrowserRouter>
  )
}