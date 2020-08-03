import axios from 'axios';


//navegar para a tela
const Navegar = (history, url) => {
  history.push(url)
};

//formata moeda
const FormataCurrency = valor => {
  return valor.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
};


//conexão com a api
//baseURL => parte padrão do caminho para a api
const API = axios.create({ 
  baseURL: 'http://localhost:4000' 
});



export{
  Navegar,
  FormataCurrency,

  API
}