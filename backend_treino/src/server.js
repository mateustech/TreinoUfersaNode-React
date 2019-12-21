const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./Config/geral');

class App {

    constructor() {
        this.express = express(); //criando o aplicativo express
        this.middleares();
        this.connect();
    }

    middleares() {
        this.express.use(cors());
        this.express.use(express.json());
    }

    connect() {
        mongoose.connect(config.CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(sucess => console.log('MongoDB Conectado com Sucesso'))
            .catch(errr => console.log("Error na Conecao"))
    }

}

module.exports = new App().express