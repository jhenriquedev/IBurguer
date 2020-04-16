//importações
const express = require('express');
const router = express();



//rotas
router.get('/', (req, res) => {
  return res.json({ message: 'Você esta em iburguer api' });
});



module.exports = router;