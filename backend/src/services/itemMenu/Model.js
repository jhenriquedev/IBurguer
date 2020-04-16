const mongoose = require('mongoose');

const ItemMenuSchema = new mongoose.Schema({
  restaurant: { //id do user restaurant
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }, 

  type: String, //tipo => lanche, refeições, bebidas
  image: String, //foto do produto
  price: Number, //preço
  title: String, //titulo do produto
  description: String, //descrição 
  preparation: String, //tempo de preparo
  evaluation: Number, //avaliação do prato
  salesCount: Number, //total de vezes vendido


  createdAt: { //data de criação no sistema
    type: Date,
    default: Date.now
  },
  active:{ //define se esta ativo
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('ItemMenu', ItemMenuSchema);