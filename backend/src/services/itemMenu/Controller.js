const Obj = require('./Model'); //importação do modelo de dados

const User = require('../users/Model');

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

    if(!body.title) return res.json({ error: 'Informe um titulo bem criativo!' });
    if(!body.price) return res.json({ error: 'Não esqueça de informar um preço.' });

    try{
      if(!await User.findById({ _id: body.restaurant}))
        return res.json({ error: 'Restaurante não encontrado em nossa base de dados.' });

      if (await Obj.findOne({ restaurant:data.restaurant, title:data.title })) 
        return res.json({ error: 'Oops.. Parece que já existe um produto com este título...' });
      
      let obj = await(Obj.create(data));
      obj = await (Obj.findOne({_id: obj._id})).populate('restaurant');
      //let obj = await (await Obj.create(data)).populate('restaurant');

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
      //restaurant: body.restaurant, //id do usuário 
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
    */

    if(!body._id) return res.json({ error: 'É necessário informar um id válido.' });
    if(!body.title) return res.json({ error: 'Oops... Não pode esquecer o título...' });
    if(!body.price) return res.json({ error: 'Oops... Não pode esquecer o preço...' });

    try{
      let obj = await Obj.findById({ _id: body._id });
      if(!obj)
        return res.json({ error: 'Não encontramos este produto em nossa base de dados. Informe um id válido.' });
      
      let obj2 = await Obj.findOne({ title:body.title });
      if (obj2){
        if(body._id != obj2._id){
          return res.json({ error: 'Oops.. Parece que já existe um produto com este título...' });
        }
      }
      
      obj = {
        type: body.type ? body.type : obj.type,
        price: body.price ? body.price : obj.price,
        title: body.title ? body.title : obj.title,
        description: body.description ? body.description : obj.description,
        preparation: body.preparation ? body.preparation : obj.preparation,
        evaluation: body.evaluation ? body.evaluation : obj.evaluation,
        salesCount: body.salesCount ? body.salesCount : obj.salesCount,
        active: body.active ? body.active : obj.active
      }

      obj = await Obj.findByIdAndUpdate({ _id:body._id }, obj, { new: true }).populate('restaurant');
      
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
            const objs = await Obj.find().populate('restaurant'); //busca a lista novamente
            return res.json(objs);

        } catch (err) {
            return res.json({ error: `Putz, parece que ocorreu um erro ao remover: ${error} ` });
        }
  },
  async index(req, res){
    //paginação de registros
    const { page = 1 } = req.query; //se não for informado o número de página, por padrão inicia com 1

    try{

      /*
      const obj = await Obj.find({})
        //.populate('restaurant') //popula com os restaurantes
        .paginate({}, { page, limit: 5 })
        //.limit(5) //limita 5 registros por vez
        //.offset((page - 1) * 5) //avança 5 registros por vez
        //.sort({ _id: -1 }); //ordena pelos mais recentes
      */

      const obj = await Obj.paginate({}, { 
        page, 
        limit: 5, 
        populate: 'restaurant' 
      });

      return res.json(obj);
    }catch(error){
      return res.json({ error: `Ocorreu um erro ao listar: ${error}` });
    }
  }
};