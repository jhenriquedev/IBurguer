const express = require('express');

const Routes = express.Router();

const Controller = require('./Controller');

Routes.get('/', (req, res) => {
  return res.json({
      message: 'Você está em /item-menu',
      //localsData: res.locals.auth_data
  })
});


Routes.post('/store', Controller.store);

Routes.put('/update', Controller.update);

Routes.delete('/delete', Controller.delete);

Routes.get('/index', Controller.index); //lista todos

module.exports = Routes;