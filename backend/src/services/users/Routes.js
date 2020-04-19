const express = require('express');
const multer = require('multer');

const Routes = express.Router();

const Controller = require('./Controller');

const Uploads = require('../../middlewares/uploads');
const upload = multer(Uploads);

Routes.get('/', (req, res) => {
  return res.json({
      message: 'Você está em /users',
      //localsData: res.locals.auth_data
  })
});


Routes.post('/store', Controller.store);

Routes.put('/update', upload.single('thumbnail'), Controller.update);

Routes.delete('/delete', Controller.delete);

Routes.get('/index', Controller.index); //lista todos

module.exports = Routes;



