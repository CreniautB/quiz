module.exports = app => {
    const question = require("../controllers/question.js");
  
    let router = require("express").Router();
    
    router.post('/createQcm', question.createQcm);
 
    router.get('/getOneQuestion', question.displayQcm);

    router.post('/sendResult', question.sendResult);

    router.get('/globalResult', question.globalResult);

    app.use('/question', router);
  };