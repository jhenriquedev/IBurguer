//importações
const express = require('express');
const router = express();

//importação de serviços
const UserRoutes = require('./services/users/Routes');

//rotas
router.get('/', (req, res) => {
  return res.json({ message: 'Você esta em iburguer api' });
});

router.use('/users', UserRoutes);

module.exports = router;