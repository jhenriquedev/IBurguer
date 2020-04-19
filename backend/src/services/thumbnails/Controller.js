const Obj = require('./Model'); //importação do modelo de dados

module.exports = {
  async store(req, res){ //adiciona novos 
    //url recebe o valor vazio caso não seja encontrado
    const { originalname: name, size, key, location: url = ''} = req.file;

    try{

      const obj = await Obj.create({name, size, key, url});
      return res.json(obj);

    }catch(error){
      return res.json({error: `Não foi possivel salvar a imagem: ${error}.`});
    }
  },
  async delete(req, res){
    const { _id } = req.headers

    try {
      let obj = await Obj.findOne({_id});
      if(!obj) return res.json({error: 'Imagem não encontrada.'});

      await Obj.findOneAndRemove({ _id });
      const objs = await Obj.find(); //busca a lista novamente
            
      return res.json(objs);

    } catch (err) {
        return res.json({ error: `Putz, parece que ocorreu um erro ao remover a imagem: ${error} ` });
    }
        
  },
  async index(req, res){
    try{
      const obj = await Obj.find({});
      return res.json(obj);

    }catch(error){
      return res.json({ error: `Ocorreu um erro ao listar imagens: ${error}` });
    }
  }
};