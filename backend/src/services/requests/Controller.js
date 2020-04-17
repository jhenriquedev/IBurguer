
const Obj = require('./Model'); //importação do modelo de dados

module.exports = {
  async store(req, res){ //adiciona novos 
    const body = req.body;

    const data = { //filtrando os dados que podem ser inseridos
      restaurant: body.restaurant, //id do usuário 
      client: body.client,
      basket: body.basket,
      paymentMethod: body.paymentMethod, //forma de pagamento escolhida pelo cliente
      evaluation: body.evaluation, //avaliação do pedido
      total: body.total, //valor total
      status: body.status, //status atual do pedido => em preparação, encaminhado, entregue, cancelado pelo estabelecimento, cancelado pelo cliente
      note: body.note, //observação do pedido
      reason: body.reason //motivo do cancelamento 
    };

    if(!req.body.restaurant) return res.json({ error: 'É necessário informar um restaurante.' });
    if(!req.body.client) return res.json({ error: 'É necessário informar um cliente.' });
    if(!req.body.basket) return res.json({ error: 'É necessário informar pelo menos um produto.' });

    try{
      let obj = await Obj.create(data);

      return res.json(obj);

    }catch(error){
      console.log(error);

      return res.json({ error: `Putz, parece que ocorreu um erro ao cadastrar: ${error}.` });
    }
  },
  async update(req, res){
    const body = req.body;

    const data = { //filtrando os dados que podem ser inseridos
      restaurant: body.restaurant, //id do usuário 
      client: body.client,
      basket: body.basket,
      paymentMethod: body.paymentMethod, //forma de pagamento escolhida pelo cliente
      evaluation: body.evaluation, //avaliação do pedido
      total: body.total, //valor total
      status: body.status, //status atual do pedido => em preparação, encaminhado, entregue, cancelado pelo estabelecimento, cancelado pelo cliente
      note: body.note, //observação do pedido
      reason: body.reason, //motivo do cancelamento 
      _id: body._id
    };

    if(!req.body._id) return res.json({ error: 'É necessário informar um id válido.' });
    if(!req.body.restaurant) return res.json({ error: 'É necessário informar um restaurante.' });
    if(!req.body.client) return res.json({ error: 'É necessário informar um cliente.' });
    if(!req.body.basket) return res.json({ error: 'É necessário informar pelo menos um produto.' });

    try{
      //let obj = await Obj.findById({ _id: data._id });
      if(!await Obj.findById({ _id: data._id }))
        return res.json({ error: 'Não encontramos esta request em nossa base de dados. Informe um id válido.' });

      let obj = await Obj.findByIdAndUpdate({ _id:data._id }, data, { new: true });
      
      return res.json(obj);
      
    }catch(error){
      return res.json({ error: `Putz, parece que ocorreu um erro ao atualizar: ${error}.` });
    }

  },
  async delete(req, res){
    const { _id } = req.headers
        if (!_id) return res.json({ error: 'É necessário informar um id válido.' });
        try {
            let obj = await Obj.findOne({_id});
            if(!obj) return res.json({error: 'Request não encontrada.'});

            await Obj.findOneAndRemove({ _id });
            const objs = await Obj.find(); //busca a lista novamente
            return res.json(objs);

        } catch (err) {
            return res.json({ error: `Putz, parece que ocorreu um erro ao remover: ${error} ` });
        }
  },
  async index(req, res){
    try{
      const obj = await Obj.find({});

      return res.json({obj});
    }catch(error){
      return res.json({ error: `Ocorreu um erro ao listar: ${error}` });
    }
  }
};