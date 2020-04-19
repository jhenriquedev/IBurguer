const express = require('express');
const Routes = express.Router();

const multer = require('multer');

const Uploads = require('../../middlewares/uploads');

const Controller = require('./Controller');

/*
    multer é um middleware do express para envio de arquivos

    para enviar 1 unico arquivo por vez => multer().single
        single('nome do campo que vai conter o arquivo')
    para enviar vários arquivos por vez => multer().array

    multer({}) => nos parenteses vai as configurações
 */
Routes.post('/store', multer(Uploads).single('file'), Controller.store);

Routes.delete('/delete', Controller.delete);

Routes.get('/index', Controller.index);

module.exports = Routes;