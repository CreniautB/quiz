import React, { useState, useEffect } from "react";

import {BrowserRouter as Redirect, Router, Switch,Route, Link} from "react-router-dom";
import routes from "../../service/call";

import './final.css'

const Final = ({totalQuestion, score}) => {


    const [globalResult, setGlobalResult] = useState()

    useEffect(() => {
        // Envoie de la requette
      return routes.globalResult()
        .then(res => {
          const globalResult = res.data
              setGlobalResult(globalResult);
          },
        )
      }, [])
      
    function sendResult(){
        const result = { content: null};
     
        result.title = 'main';
        result.score = score;
        result.totalReponses = totalQuestion;
        result.theme = ''
  
        const resultJson = JSON.stringify(result);
        
        // Envoie de la requete
        if (result.pourcent !== ''){
          return routes.sendResult(resultJson)
  
          .then(() => {
                console.log('gone')
          })
  
          .catch((error) => {
            console.log(error);
          });
        }
      }
  
  

    return(
        <div className="finalContainer" >
            <h1>votre score est de {score} / {totalQuestion}</h1>
            
            <button onClick={sendResult} >Envoyer votre résultat et voir la moyenne global</button>

            <h2> Moyenne Global sur ce test {globalResult}</h2>

            <div><Link to="/">Retentez votre chance</Link></div>

        </div>
    )

}

export default Final