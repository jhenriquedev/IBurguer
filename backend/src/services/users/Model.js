const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: String,
  password: {
    type: String,
    select: false
  },
  cellPhone: String, //celular
  restaurant: { //se for restaurante
    type: Boolean,
    default: false
  }, 

  autenticado: {
    type: Boolean,
    default: false
  },

  token: {
    type: String,
    default: ''
  },

  //informações pessoais
  thumbnail: String, //foto de perfil
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

UserSchema.pre('save', async function (next) { //executada antes de salvar o User
  let user = this

  if (!user.isModified('password')) { //se o User não estiver sendo modificado
      return next()
  }

  user.password = await bcrypt.hash(user.password, 10)
  return next()
});

module.exports = mongoose.model('User', UserSchema);