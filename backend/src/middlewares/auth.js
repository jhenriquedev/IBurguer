const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.auth;
    if(!token) return res.json({error:'Token não enviado!', codigo: 0});

    jwt.verify(token, 'IburguerApi2020', (err, decoded)=>{
        if(err) return res.json({error: 'Token inválido!', codigo: 0});

        res.locals.auth_data = decoded; //guarda no locals o usuário logado
    })
    return next(); //se o token for válido
}

module.exports = auth;