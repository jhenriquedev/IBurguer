const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
//const multerS3 = require('multer-s3')
//const aws = require('aws-sdk')

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        //evita repetição de nomes das imagens
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) callback(err)

                //pega o hash criado e junta com o nome do arquivo original
                file.key = `${hash.toString('hex')}-${file.originalname}`

                callback(null, file.key)
            })
        }
    }),
    /*
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'isocialapp-uploads',
        //se o contentType não for informado, o arquivo sofre o download automaticamente
        contentType: multerS3.AUTO_CONTENT_TYPE,
        //permissão para a aws
        acl: 'public-read',
        key: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) callback(err)

                //pega o hash criado e junta com o nome do arquivo original
                const fileName = `${hash.toString('hex')}-${file.originalname}`

                callback(null, fileName)
            })
        }
    })
    */
};

module.exports = {
    //destino do arquivo quando fizer o upload
    dest: path.resolve(__dirname, '..','..','tmp', 'uploads' ),
    //forma de storage com o multer
    storage: storageTypes[process.env.STORAGE_LOCAL],
    

    //varias configurações de limites do envio
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    //função para filtrar o upload de arquivos
    fileFilter: (req, file, callback) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]

        if(allowedMimes.includes(file.mimetype)){
            //primeiro parametro é sempre o erro
            //segundo indica sucesso
            callback(null, true)
        }else{
            callback(new Error('Tipo de arquivo inválido!'))
        }
    }
}