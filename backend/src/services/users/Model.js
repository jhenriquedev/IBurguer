const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  cellPhone: String, //celular

  //informações
  avatar: String,
  nome: String,

  //endereço
  cep: String,
  publicPlace: String, //logradouro
  complement: String, //complemento
  neighborhood: String,//bairro
  city: String, //cidade
  uf: String, //estado
  number: String, //numero

  createdAt: { //data de criação no sistema
    type: Date,
    default: Date.now
  },
  active:{ //define se esta ativo
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('User', UserSchema);