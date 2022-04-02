
import routes from "../../service/call";
import React, { useEffect, useRef, useState } from "react";

import OneQuestion from "./oneQuestion";
import Final from "./final";

import Timer from "../../component/timer";

import './qcm.css'

const Qcm= () => {
   
  const [seconds, setSeconds] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState();
  const [questioneReady, setQuestionReady] = useState(false)

  const [score, setScore] = useState(0)
  const [totalQuestion, setTotalQuestion] = useState(0)
  

    useEffect(() => {
        // Envoie de la requette
      return routes.getOneQuestion()
        .then(res => {
          const questions = res.data
              setQuestions(questions);
          },
        )
      }, [])


      function chooseOneQuestion(){
        let randomIndex = Math.floor(Math.random() * questions.length);
        setQuestion(questions.splice(randomIndex, 1)[0])
        setQuestionReady(true)
        setSeconds(20)
        setIsActive(true)
      }

      if(totalQuestion >= 5){
        return(
          <Final totalQuestion={totalQuestion} score={score} />
        )
      }
      else{

        if(questioneReady && question!== undefined){
          return( 
            <div>
              <OneQuestion question={question} chooseOneQuestion={chooseOneQuestion} setScore={setScore} setTotalQuestion={setTotalQuestion} score={score} totalQuestion={totalQuestion} seconds={seconds} />
              <Timer seconds={seconds} setSeconds={setSeconds} isActive={isActive} />
            </div>
          )
        }
      }


      return(
        
          <div className="regleQcm" >

            <h1>Qcm de culture générale</h1>

            <h2>20 Questions</h2>
            <h3>4 Propositions de réponse</h3>

           <button  onClick={chooseOneQuestion  } > Commencer le quizz</button>

          </div>
      )
}

export default Qcm