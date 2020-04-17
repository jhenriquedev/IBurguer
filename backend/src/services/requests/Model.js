const mongoose = require('mongoose');

//pedidos
const RequestSchema = new mongoose.Schema({
  restaurant: { //id do user restaurant
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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