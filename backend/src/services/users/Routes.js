const express = require('express');
const multer = require('multer');

const Routes = express.Router();

const auth = require('../../middlewares/auth');
const Controller = require('./Controller');

const Uploads = require('../../middlewares/uploads');
const upload = multer(Uploads);

Routes.get('/', auth, (req, res) => {
  return res.json({
      message: 'Você está em /users',
      localsData: res.locals.auth_data
  });
});

Routes.post('/login', Controller.auth); //autenticacao

Routes.post('/store', auth, Controller.store);

Routes.put('/update', auth, upload.single('thumbnail'), Controller.update);

Routes.delete('/delete', auth, Controller.delete);

Routes.get('/index', auth, Controller.index); //lista todos

Routes.get('/find-one', auth, Controller.show); //busca 1 por id

module.exports = Routes;



