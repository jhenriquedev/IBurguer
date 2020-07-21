import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import Recover from './pages/Recover';
import Register from './pages/Register';
import Busines from './pages/Busines';
import Dashboard from './pages/Dashboard';
import Request from './pages/Request';
import Menu from './pages/Menu';


export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/login' exact component={ Login } />
        <Route path='/recover' exact component={ Recover } />
        <Route path='/register' exact component={ Register } />
        <Route path='/busines' exact component={ Busines } />
        <Route path='/dashboard' exact component={ Dashboard } />
        <Route path='/request' exact component={ Request } />
        <Route path='/menu' exact component={ Menu } />

        <Redirect from='/' to='/home' />
        <Redirect from='*' to='/home' />
      </Switch>
    </BrowserRouter>
  )
};