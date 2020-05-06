
//navegar para a tela
const Navegar = (history, url) => {
  history.push(url)
};

//formata moeda
const FormataCurrency = valor => {
  return valor.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
};

export{
  Navegar,
  FormataCurrency
}