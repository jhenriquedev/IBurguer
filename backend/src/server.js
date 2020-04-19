require('dotenv').config();
//Importações
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const cors = require('cors');
const path = require('path');

const routes = require('./routes');


//Declarações
const app = express();
const port = process.env.port || 4000 //busca a porta disponivel no servidor

//Conexões
const BD_LOCALHOST = 'mongodb://localhost/iburguer';

//const urlBdMongoService = 'mongodb+srv://MegaTemplo:MegaTemplo@omnistack-zpr14.mongodb.net/MegaTemplo?retryWrites=true&w=majority'

//const URL_BD = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : urlBdMongoService
const URL_BD = BD_LOCALHOST;

const use = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(URL_BD, use);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Middlewares
app.use(morgan('dev'));

//caminho para os arquivos salvos localmente no dev
//express utiliza o static para retornar aquivos estaticos
//arquivos pdf, imagens
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

/*
app.get('/', (req, res) => {
  res.send('Você esta em iburguer api');
});
*/

app.use(routes);


app.listen(port, () => console.log(`Listenning in ${port}`));