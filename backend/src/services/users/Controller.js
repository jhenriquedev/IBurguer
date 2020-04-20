const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Obj = require('./Model'); //importação do modelo de dados

//webtoken
const createToken = _id => {
  //recebe o id do usuário, a password da aplicação e expira em 7d
  return jwt.sign({ _id }, 'IburguerApi2020', { expiresIn: '7d' })
}

module.exports = {
  async store(req, res){ //adiciona novos users
    const body = req.body;
    const data = { //filtrando os dados que podem ser inseridos
      email: body.email, //não pode ser mudado
      password: body.password, 
      cellPhone: body.cellPhone, 
      restaurant: body.restaurant 
    };

    if(!req.body.email) return res.json({ error: 'Informe o seu melhor e-mail!' });
    if(!req.body.password) return res.json({ error: 'Oops... Não pode esquecer o password...' });

    try{
      if (await Obj.findOne({ email:data.email })) 
        return res.json({ error: 'Oops.. Parece que este e-mail já está em uso...' });
      
      let obj = await Obj.create(data);

      obj.password = undefined; //oculta a password
      obj.autenticado = true;
      obj.token = createToken(obj._id);
      console.log(obj);

      return res.json(obj);

    }catch(error){
      console.log(error);

      return res.json({ error: `Putz, parece que ocorreu um erro ao cadastrar: ${error}.` });
    }
  },
  async update(req, res){
    const body = req.body;

    if(!req.body._id) return res.json({ error: 'É necessário informar um id válido.' });
    if(!req.body.password) return res.json({ error: 'Oops... Não pode esquecer o password...' });

    try{
      let obj = await Obj.findById({ _id: body._id }).select('+password');
      if(req.body.password){ //se o password tiver sido passado
        if(obj.password){ //se o user.password existir
          if (req.body.password != obj.password) { //se forem diferentes
            body.password = await bcrypt.hash(body.password, 10);
          };
        };
      };

      obj = {
        password: body.password ? body.password : obj.password, 
        cellPhone: body.cellPhone ? body.cellPhone : obj.cellPhone, 
        restaurant: body.restaurant === 1 ? true : false,
      
        thumbnail: body.thumbnail ? body.thumbnail : obj.thumbnail,
        logo: body.logo ? body.logo : obj.logo,
        banner: body.banner ? body.banner : obj.banner,
        description: body.description ? body.description : obj.description, 

        expedient: body.expedient ? body.expedient : obj.expedient,
        paymentMethods: body.paymentMethods ? body.paymentMethods : obj.paymentMethods,
        deliveryFee: body.deliveryFee ? body.deliveryFee : obj.deliveryFee,
        deliveryTime: body.deliveryTime ? body.deliveryTime : obj.deliveryTime,
        evaluationTotal: body.evaluationTotal ? body.evaluationTotal : obj.evaluationTotal,

        cep: body.cep ? body.cep : obj.cep,
        publicPlace: body.publicPlace ? body.publicPlace : obj.publicPlace, //logradouro
        complement: body.complement ? body.complement : obj.complement, //complemento
        neighborhood: body.neighborhood ? body.neighborhood : obj.neighborhood, //bairro
        city: body.city ? body.city : obj.city, //cidade
        uf: body.uf ? body.uf : obj.uf, //estado
        number: body.number ? body.number : obj.number, //numero

        active: body.active ? body.active : obj.active
      };

      obj = await Obj.findByIdAndUpdate({ _id:body._id }, obj, { new: true });

      obj = await Obj.findOne({_id: body._id}).populate('thumbnail logo banner');
      
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
            if(!obj) return res.json({error: 'User não encontrado.'});

            await Obj.findOneAndRemove({ _id });
            const objs = await Obj.find(); //busca a lista de usuários novamente
            return res.json(objs);

        } catch (err) {
            return res.json({ error: `Putz, parece que ocorreu um erro ao remover: ${error} ` });
        }
  },
  async index(req, res){
    const { page = 1 } = req.query;
    try{
      //const obj = await Obj.find({});

      const obj = await Obj.paginate({}, { 
        page, 
        limit: 5, 
        populate: 'thumbnail logo banner'
      });

      return res.json(obj);
    }catch(error){
      return res.json({ error: `Ocorreu um erro ao listar Users: ${error}` });
    }
  },
  async show(req, res){
    const { _id } = req.headers;

    if (!_id) return res.json({ error: 'Informe um _id válido.' });

    try{
      
      const obj = await Obj.findById(_id)
        .populate('thumbnail logo banner');

      return res.json(obj);

    }catch(error){
      return res.json({ error: `Id não encontrado: ${error}` });
    }
  }
};