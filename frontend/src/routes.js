import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages
import Login from './pages/Login';
import Register from './pages/Register';


export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={ Login } />
        <Route path='/register' exact component={ Register } />

        <Redirect from='/' to='/login' />
        <Redirect from='*' to='/login' />
      </Switch>
    </BrowserRouter>
  )
}