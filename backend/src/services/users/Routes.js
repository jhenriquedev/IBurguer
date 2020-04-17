const express = require('express');

const UserRoutes = express.Router();

const UserController = require('./Controller');

UserRoutes.get('/', (req, res) => {
  return res.json({
      message: 'Você está em /users',
      //localsData: res.locals.auth_data
  })
});


UserRoutes.post('/store', UserController.store);

UserRoutes.put('/update', UserController.update);

UserRoutes.delete('/delete', UserController.delete)

module.exports = UserRoutes;



