const mongoose = require('mongoose');

const RestaurantsSchema = new mongoose.Schema({
  email: String,
  password: String,

  //informações
  logo: String, //imagem de perfil do restaurante
  banner: String, //imagem promocional
  name: String, //nome e titulo do restaurante
  description: String, //descrição
  expedient: String, //dia e horário de expediente normal

  //endereço
  cep: String,
  publicPlace: String, //logradouro
  complement: String, //complemento
  neighborhood: String,//bairro
  city: String, //cidade
  uf: String, //estado
  number: String, //numero

  //outras informações
  paymentMethods: String, // formas de pagamento aceitas => credito, debito, cash
  deliveryFee: String, //taxa de entrega
  deliveryTime: String, //tempo de entrega
  evaluationTotal: Number, //avaliação => 0 - 5 estrelas => média das avaliações gerais
  //evaluation:[] //lista das avaliações individuais

  //cardápio
  menu:[{
    type: String, //tipo => lanche, refeições, bebidas
    image: String, //foto do produto
    price: Number, //preço
    title: String, //titulo do produto
    description: String, //descrição 
    preparation: String, //tempo de preparo
    evaluation: Number //avaliação do prato
  }],

  //vendas
  requests:[{
    client: String, //cliente que comprou
    basket: [String], //preenchido com os ids dos produtos do menu
    paymentMethod: String, //forma de pagamento escolhida pelo cliente
    evaluation: Number, //avaliação do pedido
    total: Number, //valor total
    status: String, //status atual do pedido => em preparação, encaminhado, entregue, cancelado pelo estabelecimento, cancelado pelo cliente
    note: String, // observação do pedido
    reason: String //motivo do cancelamento 
  }],


  createdAt: { //data de criação no sistema
    type: Date,
    default: Date.now
  },
  active:{ //define se esta ativo
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Restaurant', RestaurantsSchema);