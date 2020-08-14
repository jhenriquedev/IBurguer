import axios from 'axios';


//navegar para a tela
const Navegar = (history, url) => {
  history.push(url)
};

//formata moeda
const FormataCurrency = valor => {
  return valor.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
};


//login
const Login = (history, data) => {
  //cria uma sessão
  localStorage.setItem('user', JSON.stringify(data));

  return Navegar(history, '/dashboard');
};

//sair do aplicativo
const Logout = (history) => {
  localStorage.removeItem('user'); //remove sessão
  //navega para a tela inicial
  return Navegar(history, '/');
};

//recuperar sessão
const getSession = () => {
  return JSON.parse(localStorage.getItem('user')); //recupera sessão
};



//conexão com a api
//baseURL => parte padrão do caminho para a api
const API = axios.create({ 
  baseURL: 'http://localhost:4000' 
});



export{
  Navegar,
  FormataCurrency,

  Login,
  Logout,
  getSession,

  API
}