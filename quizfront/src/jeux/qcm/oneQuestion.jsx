import React, { useEffect, useState, useRef } from "react";
import routes from "../../service/call";


const OneQuestion = ({question, chooseOneQuestion, setScore, setTotalQuestion, score, totalQuestion, seconds}) => {

const btnContainer = useRef(null);

 let reponses = question.reponses.split(' ')

    function avoidClicking(){
        let  arr = Array.prototype.slice.call( btnContainer.current.children )
        arr.forEach(element => {
            element.classList.add('avoidClick')
        });
    }

    function bonneReponse(e) {
        return new Promise(function(resolve, reject) {
            e.target.classList.add("bonneReponse");
            setScore(score  +1 );
            setTotalQuestion(totalQuestion +1);
            avoidClicking()

            setTimeout(resolve, 650);
        }).then(function() {
            chooseOneQuestion();

        });
        }

    function mauvaiseReponse(e) {
        return new Promise(function(resolve, reject) {
            e.target.classList.add("mauvaiseReponse");
            setTotalQuestion(totalQuestion +1);
            avoidClicking()
            setTimeout(resolve, 650);
        }).then(function() {
            chooseOneQuestion();

        });
        }

    function selectReponse(e, item){
        if(item == question.bonneReponse){
            bonneReponse(e);
        }
        else{
            mauvaiseReponse(e);
        }
    }

    if (seconds <= 0){
        chooseOneQuestion()
        setTotalQuestion(totalQuestion  +1)
    }   

    return (


        <div className="qcmContainer" >

            <h1 className="questionQcm" >{question.question}</h1>
            <h2 className="time">Temps restant {seconds}</h2>
            <div className="questionQcmContainer" ref={btnContainer} >
                {reponses.map((item, i) => <button className="buttonQcmQuestion" onClick={((e) => selectReponse(e, item))} key={item + i}>{item}</button>)}
            </div> 
            <h3 className="qcmScores">{score}/{totalQuestion}</h3>
        </div>

    )

}


export default OneQuestion