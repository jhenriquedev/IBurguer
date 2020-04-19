const mongoose = require('mongoose');
//const aws = require('aws-sdk')

//para trabalhar no ambiente local
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

//const s3 = new aws.S3();    //lê as variaveis de ambiente automaticamente

const ThumbnailSchema = new mongoose.Schema({
    name: String, //nome original do arquivo
    size: Number, //tamanho do arquivo
    key: String, //nome gerado pelo hash
    url: String, //caminho da imagem
    createdAt:{
        type: Date,
        default: Date.now
    }
})

//utiliza-se function para que se possa 
ThumbnailSchema.pre('save', function(){
    if(!this.url){ //cria uma url antes de salvar pegando a key
        this.url=`${process.env.APP_URL}/files/${this.key}`
    }
})

//Verifica se o arquivo está sendo deletado do banco de dados
//e também remove no aws
ThumbnailSchema.pre('remove', function(){
  return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', this.key))
  /*
    if (process.env.STORAGE_TYPE === 's3'){ //se for um storage do tipo s3
        return s3.deleteObject({
            Bucket: process.env.BUCKET_NAME,
            Key: this.key
        }).promise()
            .then(resp => { console.log(resp.status) })
            .catch(resp => { console.log(resp.status)}) 
    }else{
        return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key))
    }
  */
})


module.exports = mongoose.model('Thumb', ThumbnailSchema)