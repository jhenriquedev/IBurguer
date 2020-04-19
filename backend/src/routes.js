//importações
const express = require('express');
const router = express();

//importação de serviços
const UserRoutes = require('./services/users/Routes');
const ItemMenuRoutes = require('./services/itemMenu/Routes');
const RequestsRoutes = require('./services/requests/Routes');
const ThumbsRoutes = require('./services/thumbnails/Routes');


//rotas
router.get('/', (req, res) => {
  return res.json({ message: 'Você esta em iburguer api' });
});

router.use('/users', UserRoutes);
router.use('/item-menu', ItemMenuRoutes);
router.use('/requests', RequestsRoutes);
router.use('/thumbs', ThumbsRoutes);

module.exports = router;