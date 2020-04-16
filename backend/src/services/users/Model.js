const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  cellPhone: String, //celular
  restaurant: { //se for restaurante
    type: Boolean,
    default: false
  }, 

  //informações pessoais
  avatar: String,
  name: String,

  //informações comerciais
  logo: String, //imagem de perfil do restaurante
  banner: String, //imagem promocional
  //name: String, //nome e titulo do restaurante
  description: String, //descrição
  expedient: String, //dia e horário de expediente normal

  //outras informações
  paymentMethods: String, // formas de pagamento aceitas => credito, debito, cash
  deliveryFee: String, //taxa de entrega
  deliveryTime: String, //tempo de entrega
  evaluationTotal: Number, //avaliação => 0 - 5 estrelas => média das avaliações gerais
  //evaluation:[] //lista das avaliações individuais


  //endereço
  cep: String,
  publicPlace: String, //logradouro
  complement: String, //complemento
  neighborhood: String, //bairro
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