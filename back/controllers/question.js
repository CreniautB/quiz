const models =  require('../models/');
const result = require('../models/result');


exports.createQcm = (req, res, next) => {
    const qcm = new models.QcmQuestion({
      question : req.body.question,
      theme : req.body.theme,
      reponses : req.body.reponses,
      bonneReponse : req.body.bonneReponse
    });
    qcm.save()
      .then(() => res.status(201).json({ message: 'Qcm créé !' }))
      .catch(error => res.status(400).json({ error }));
};

exports.displayQcm = (req, res, next) => {

  models.QcmQuestion.findAll({  })
    .then((questions) => {
      res.status(200).json(questions)
    })
    .catch((error) => {
      res.status(400).json({ error})
    })
  };

  exports.sendResult = (req, res, next) => {

    const result = new models.Result({
        title : req.body.title,
        bonneReponses : req.body.score,
        totalReponses : req.body.totalReponses,
        theme : req.body.theme,
    });
    result.save()
      .then(() => res.status(201).json({ message: 'Note ajoutée !' }))
      .catch(error => res.status(400).json({ error }));
  }

  exports.globalResult = (req, res, next) => {

    let arrayBonneReponse = []

    models.Result.findAll({})
      .then((results) =>{
        results.forEach(element => {
            arrayBonneReponse.push(element.dataValues.bonneReponses)
        });

      }).then(() =>{
        function ArrayAvg(myArray) {
          var i = 0, summ = 0, ArrayLen = myArray.length;
          while (i < ArrayLen) {
              summ = summ + myArray[i++];
      }
          return summ / ArrayLen;
      }
        const moyenne = ArrayAvg(arrayBonneReponse);
        return moyenne
      })
      .then((moyenne) => {
        res.status(200).json(moyenne)
      })
      .catch((error) => {
        res.status(400).json({ error})
      })
  }