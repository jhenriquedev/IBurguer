import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';


export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={ Login } />
        <Route path='/register' exact component={ Register } />
        <Route path='/dashboard' exact component={ Dashboard } />

        <Redirect from='/' to='/login' />
        <Redirect from='*' to='/login' />
      </Switch>
    </BrowserRouter>
  )
};