import axios from 'axios';


//navegar para a tela
const Navegar = (history, url) => {
  history.push(url)
};

//formata moeda
const FormataCurrency = valor => {
  return valor.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
};

//sair do aplicativo
const Logout = (history) => {
  localStorage.removeItem('user'); //remove sessão
  //navega para a tela inicial
  Navegar(history, '/');
};


//conexão com a api
//baseURL => parte padrão do caminho para a api
const API = axios.create({ 
  baseURL: 'http://localhost:4000' 
});



export{
  Navegar,
  FormataCurrency,
  Logout,

  API
}