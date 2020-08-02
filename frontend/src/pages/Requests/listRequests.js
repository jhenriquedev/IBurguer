import React from 'react';

import {ASSETS, TEMPLATES} from '../../summary';


const REQUEST = [
  <TEMPLATES.REQUEST key={0} config={{
    client: {
      name: 'Miranda Ribeiro',
      thumbnail: ASSETS.USER,
      cep: '66833011',
      publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
      complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
      neighborhood: 'Coqueiro', //bairro
      city: 'Ananindeua', //cidade
      uf: 'PA', //estado
      number: '135', //numero
    },
    basket: [
      {
        _id: 0,
        img: ASSETS.ARTESANAL,
        name: 'Hamburguer Artesanal',
        description: 'Ao ponto, sem molho e sem cebola.',
        price: 32.99
      },
      {
        _id: 1,
        img: ASSETS.BATATA_FRITA,
        name: 'Batata Frita crocante',
        description: 'Bem sequinha.',
        price: 12.36
      }
    ],
    paymentMethod: 'Dinheiro',
    total: 102,
    status: 0,
    note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
  }} />,

  <TEMPLATES.REQUEST key={1} config={{
    client: {
      name: 'Miranda Ribeiro',
      thumbnail: ASSETS.USER,
      cep: '66833011',
      publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
      complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
      neighborhood: 'Coqueiro', //bairro
      city: 'Ananindeua', //cidade
      uf: 'PA', //estado
      number: '135', //numero
    },
    basket: [
      {
        _id: 0,
        img: ASSETS.ARTESANAL,
        name: 'Hamburguer Artesanal',
        description: 'Ao ponto, sem molho e sem cebola.',
        price: 32.99
      },
      {
        _id: 1,
        img: ASSETS.BATATA_FRITA,
        name: 'Batata Frita crocante',
        description: 'Bem sequinha.',
        price: 12.36
      },
      {
        _id: 2,
        img: ASSETS.CACHORRO_QUENTE,
        name: 'Hotdog Gigante',
        description: 'Com muito molho, mal passado.',
        price: 65.36
      }
    ],
    paymentMethod: 'Dinheiro',
    total: 102,
    status: 1,
    note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
  }} />,

  <TEMPLATES.REQUEST key={2} config={{
    client: {
      name: 'Miranda Ribeiro',
      thumbnail: ASSETS.USER,
      cep: '66833011',
      publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
      complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
      neighborhood: 'Coqueiro', //bairro
      city: 'Ananindeua', //cidade
      uf: 'PA', //estado
      number: '135', //numero
    },
    basket: [
      {
        _id: 0,
        img: ASSETS.ARTESANAL,
        name: 'Hamburguer Artesanal',
        description: 'Ao ponto, sem molho e sem cebola.',
        price: 32.99
      },
    ],
    paymentMethod: 'Dinheiro',
    total: 102,
    status: 2,
    note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
  }} />,

  <TEMPLATES.REQUEST key={3} config={{
    client: {
      name: 'Miranda Ribeiro',
      thumbnail: ASSETS.USER,
      cep: '66833011',
      publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
      complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
      neighborhood: 'Coqueiro', //bairro
      city: 'Ananindeua', //cidade
      uf: 'PA', //estado
      number: '135', //numero
    },
    basket: [
      {
        _id: 0,
        img: ASSETS.ARTESANAL,
        name: 'Hamburguer Artesanal',
        description: 'Ao ponto, sem molho e sem cebola.',
        price: 32.99
      },
    ],
    paymentMethod: 'Dinheiro',
    total: 102,
    status: 2,
    note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
  }} />,

  <TEMPLATES.REQUEST key={4} config={{
    client: {
      name: 'Miranda Ribeiro',
      thumbnail: ASSETS.USER,
      cep: '66833011',
      publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
      complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
      neighborhood: 'Coqueiro', //bairro
      city: 'Ananindeua', //cidade
      uf: 'PA', //estado
      number: '135', //numero
    },
    basket: [
      {
        _id: 0,
        img: ASSETS.ARTESANAL,
        name: 'Hamburguer Artesanal',
        description: 'Ao ponto, sem molho e sem cebola.',
        price: 32.99
      },
    ],
    paymentMethod: 'Dinheiro',
    total: 102,
    status: 2,
    note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
  }} />,

  <TEMPLATES.REQUEST key={5} config={{
    client: {
      name: 'Miranda Ribeiro',
      thumbnail: ASSETS.USER,
      cep: '66833011',
      publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
      complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
      neighborhood: 'Coqueiro', //bairro
      city: 'Ananindeua', //cidade
      uf: 'PA', //estado
      number: '135', //numero
    },
    basket: [
      {
        _id: 0,
        img: ASSETS.ARTESANAL,
        name: 'Hamburguer Artesanal',
        description: 'Ao ponto, sem molho e sem cebola.',
        price: 32.99
      },
    ],
    paymentMethod: 'Dinheiro',
    total: 102,
    status: 2,
    note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
  }} />,

  <TEMPLATES.REQUEST key={2} config={{
    client: {
      name: 'Miranda Ribeiro',
      thumbnail: ASSETS.USER,
      cep: '66833011',
      publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
      complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
      neighborhood: 'Coqueiro', //bairro
      city: 'Ananindeua', //cidade
      uf: 'PA', //estado
      number: '135', //numero
    },
    basket: [
      {
        _id: 0,
        img: ASSETS.ARTESANAL,
        name: 'Hamburguer Artesanal',
        description: 'Ao ponto, sem molho e sem cebola.',
        price: 32.99
      },
    ],
    paymentMethod: 'Dinheiro',
    total: 102,
    status: 2,
    note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
  }} />,

  <TEMPLATES.REQUEST key={2} config={{
    client: {
      name: 'Miranda Ribeiro',
      thumbnail: ASSETS.USER,
      cep: '66833011',
      publicPlace: 'Rod. Mário Covas, Pass Santa Maria', //logradouro
      complement: 'Residêncial Ilha Bela, Bl 15, apt 203', //complemento
      neighborhood: 'Coqueiro', //bairro
      city: 'Ananindeua', //cidade
      uf: 'PA', //estado
      number: '135', //numero
    },
    basket: [
      {
        _id: 0,
        img: ASSETS.ARTESANAL,
        name: 'Hamburguer Artesanal',
        description: 'Ao ponto, sem molho e sem cebola.',
        price: 32.99
      },
    ],
    paymentMethod: 'Dinheiro',
    total: 102,
    status: 2,
    note: 'Ao chegar na portaria, por favor pedir para liberação da entrada no residêncial.'
  }} />
];

export {
  REQUEST
};