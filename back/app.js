const express = require('express');
const rateLimit = require('express-rate-limit')
const helmet = require("helmet");

require('dotenv').config()

const app = express();


const db = require("./models");

// Configuration de l'entête
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
});
    
// Définit un nombre maximum de requette par ip pour prevenir des attaques par force brute
app.use(apiLimiter);

// Réduit le risque d'attaque Ssl 
app.use(helmet());


app.use(express.json());       
app.use(express.urlencoded({extended:false}));

require('./routes/question.js')(app);

db.sequelize.sync();

module.exports = app;