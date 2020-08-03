const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  email: String, //não pode ser mudado
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

  msg: {
    type: String,
    default: ''
  },

  //informações pessoais
  thumbnail: { //id da foto de perfil
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thumb',
    required: false
  }, 
  name: String,

  //informações comerciais
  logo: { //id da imagem de perfil do restaurante
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thumb',
    required: false
  }, //imagem de perfil do restaurante
  banner: { //id da imagem promocional
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thumb',
    required: false
  }, //imagem promocional
  //name: String, //nome e titulo do restaurante
  description: String, //descrição
  expedient: String, //dia e horário de expediente normal

  //outras informações
  paymentMethods: [String], // formas de pagamento aceitas => credito, debito, cash
  deliveryFee: Number, //taxa de entrega
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

UserSchema.plugin(mongoosePaginate);

UserSchema.pre('save', async function (next) { //executada antes de salvar o User
  let user = this

  if (!user.isModified('password')) { //se o User não estiver sendo modificado
      return next()
  }

  user.password = await bcrypt.hash(user.password, 10)
  return next()
});

module.exports = mongoose.model('User', UserSchema);