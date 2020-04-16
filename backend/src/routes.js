const express = require('express');
const router = express();


router.get('/', (req, res) => {
  res.send('Você esta em iburguer api');
});

module.exports = router;