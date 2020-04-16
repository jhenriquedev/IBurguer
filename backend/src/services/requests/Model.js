const mongoose = require('mongoose');

//pedidos
const RequestSchema = new mongoose.Schema({
  restaurant: { //id do restaurant
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: false
  }, 

  client: { //id do cliente que fez o pedido
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }, 

  basket: [{ //preenchido com os ids dos produtos do menu
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ItemMenu',
      required: false
    }
  }], 

  paymentMethod: String, //forma de pagamento escolhida pelo cliente
  evaluation: Number, //avaliação do pedido
  total: Number, //valor total
  status: String, //status atual do pedido => em preparação, encaminhado, entregue, cancelado pelo estabelecimento, cancelado pelo cliente
  note: String, // observação do pedido
  reason: String, //motivo do cancelamento 

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


  createdAt: { //data de criação no sistema
    type: Date,
    default: Date.now
  },
  active:{ //define se esta ativo => após a entrega deve ser desativado
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Request', RequestSchema);