const Obj = require('./Model'); //importação do modelo de dados

module.exports = {
  async store(req, res){ //adiciona novos 
    const body = req.body;

    const data = { //filtrando os dados que podem ser inseridos
      restaurant: body.restaurant, //id do usuário 
      type: body.type, //lanche, refeições, bebidas
      //image: body.image, => foto do produto
      price: body.price, 
      title: body.title,
      description: body.description,
      preparation: body.preparation,
      //evaluation: body.evaluation,
      //salesCount: body.salesCount 
    };

    if(!req.body.title) return res.json({ error: 'Informe um titulo bem criativo!' });
    if(!req.body.price) return res.json({ error: 'Não esqueça de informar um preço.' });

    try{
      if (await Obj.findOne({ restaurant:data.restaurant, title:data.title })) 
        return res.json({ error: 'Oops.. Parece que já existe um produto com este título...' });
      
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
      type: body.type, //lanche, refeições, bebidas
      //image: body.image, => foto do produto
      price: body.price, 
      title: body.title,
      description: body.description,
      preparation: body.preparation,
      evaluation: body.evaluation,
      salesCount: body.salesCount,
      _id: body._id  
    };

    if(!req.body._id) return res.json({ error: 'É necessário informar um id válido.' });
    if(!req.body.title) return res.json({ error: 'Oops... Não pode esquecer o título...' });
    if(!req.body.price) return res.json({ error: 'Oops... Não pode esquecer o preço...' });

    try{
      //let obj = await Obj.findById({ _id: data._id });
      if(!await Obj.findById({ _id: data._id }))
        return res.json({ error: 'Não encontramos este produto em nossa base de dados. Informe um id válido.' });

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
            if(!obj) return res.json({error: 'Produto não encontrado.'});

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