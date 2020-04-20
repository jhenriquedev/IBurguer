
const Obj = require('./Model'); //importação do modelo de dados

const User = require('../users/Model'); //importa os usuários para validações
const Item = require('../itemMenu/Model'); 

module.exports = {
  async store(req, res){ //adiciona novos 
    const body = req.body;

    const data = { //filtrando os dados que podem ser inseridos
      restaurant: body.restaurant, //id do usuário 
      client: body.client,
      basket: body.basket,
      paymentMethod: body.paymentMethod, //forma de pagamento escolhida pelo cliente
      total: body.total, //valor total
      status: 'Em análise', //status atual do pedido => em analise, preparação, encaminhado, entregue, cancelado pelo estabelecimento, cancelado pelo cliente
      note: body.note, //observação do pedido
    };

    if(!body.restaurant) return res.json({ error: 'É necessário informar um restaurante.' });
    if(!body.client) return res.json({ error: 'É necessário informar um cliente.' });
    if(!body.basket) return res.json({ error: 'É necessário informar pelo menos um produto.' });

    try{
      if(!await User.findById({ _id: body.restaurant }))
        return res.json({ error: 'Restaurante não encontrado em nossa base de dados.' });

      if(!await User.findById({ _id: body.client }))
        return res.json({ error: 'User não encontrado em nossa base de dados.' });
      
      /*
      await map.basket(async item => {
        if(await findById({id:item}))
          return res.json({ error: 'Este produto não pertence ao restaurante informado.' });
      });
      */

      let obj = await Obj.create(data);
      obj = await (Obj.findOne({_id: obj._id})).populate('restaurant client basket');

      return res.json(obj);

    }catch(error){
      console.log(error);

      return res.json({ error: `Putz, parece que ocorreu um erro ao cadastrar: ${error}.` });
    }
  },
  async update(req, res){
    const body = req.body;

    /*
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
    */

    if(!body._id) return res.json({ error: 'É necessário informar um id válido.' });
    if(!body.restaurant) return res.json({ error: 'É necessário informar um restaurante.' });
    if(!body.client) return res.json({ error: 'É necessário informar um cliente.' });
    if(!body.basket) return res.json({ error: 'É necessário informar pelo menos um produto.' });

    try{
      if(!await User.findById({ _id: body.restaurant}))
        return res.json({ error: 'Restaurante não encontrado em nossa base de dados.' });

      if(!await User.findById({ _id: body.client }))
        return res.json({ error: 'User não encontrado em nossa base de dados.' });

      let obj = await Obj.findById({ _id: body._id });
      if(!obj)
        return res.json({ error: 'Não encontramos esta request em nossa base de dados. Informe um id válido.' });

      obj = {
        basket: body.basket ? body.basket : obj.basket,
        paymentMethod: body.paymentMethod ? body.paymentMethod : obj.paymentMethod,
        evaluation: body.evaluation ? body.evaluation : obj.evaluation, 
        total: body.total ? body.total : obj.total, 
        status: body.status ? body.status : obj.status, 
        note: body.note ? body.note : obj.note, 
        reason: body.reason ? body.reason : obj.reason
      };

      obj = await Obj.findByIdAndUpdate({ _id:body._id }, obj, { new: true }).populate('restaurant client basket');
      
      return res.json(obj);
      
    }catch(error){
      return res.json({ error: `Putz, parece que ocorreu um erro ao atualizar: ${error}.` });
    }

  },
  async delete(req, res){
    const { _id } = req.headers
        if (!_id) return res.json({ error: 'É necessário informar um id válido.' });
        try {
            if(!await Obj.findOne({_id})) 
              return res.json({ error: 'Request não encontrada.' });

            await Obj.findOneAndRemove({ _id });
            const objs = await Obj.find(); //busca a lista novamente
            return res.json(objs);

        } catch (err) {
            return res.json({ error: `Putz, parece que ocorreu um erro ao remover: ${error} ` });
        }
  },
  async index(req, res){
    
    const { page = 1 } = req.query;

    try{
      //const obj = await Obj.find({}).populate('restaurant client basket');

      const obj = await Obj.paginate({}, { 
        page, 
        limit: 5, 
        populate: 'restaurant client basket' 
      });

      return res.json(obj);
    }catch(error){
      return res.json({ error: `Ocorreu um erro ao listar: ${error}` });
    }
  },
  async show(req, res){
    const { _id } = req.headers;

    if (!_id) return res.json({ error: 'Informe um _id válido.' });

    try{
      
      const obj = await Obj.findById(_id);
      return res.json(obj);

    }catch(error){
      return res.json({ error: `Id não encontrado: ${error}` });
    }
  }
};