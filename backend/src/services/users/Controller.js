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
      email: body.email, 
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
    const data = { //filtrando os dados que podem ser inseridos
      password: body.password, 
      cellPhone: body.cellPhone, 
      restaurant: body.restaurant,
      _id: body._id 
    };

    if(!req.body._id) return res.json({ error: 'É necessário informar um id user.' });
    if(!req.body.password) return res.json({ error: 'Oops... Não pode esquecer o password...' });

    try{
      let obj = await Obj.findById({ _id: data._id }).select('+password');
      if(req.body.password){ //se o password tiver sido passado
        if(obj.password){ //se o user.password existir
          if (req.body.password != obj.password) { //se forem diferentes
            data.password = await bcrypt.hash(data.password, 10);
          };
        };
      };
      obj = await Obj.findByIdAndUpdate({ _id:data._id }, data, { new: true });
      
      return res.json(obj);
      
    }catch(error){
      return res.json({ error: `Putz, parece que ocorreu um erro ao atualizar: ${error}.` });
    }

  },
  async delete(req, res){
    const { _id } = req.headers
        if (!_id) return res.json({ error: 'É necessário informar o id do user.' });
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
    try{
      const obj = await Obj.find({});

      return res.json({obj});
    }catch(error){
      return res.json({ error: `Ocorreu um erro ao listar Users: ${error}` });
    }
  }
};