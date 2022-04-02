import React from "react";

import { Link } from "react-router-dom";

import routes from "../../service/call"

const AddQcm = () => {

    function createQcm(submitEvent) {
    
        submitEvent.preventDefault();
    
        const qcm = { content: null};
        const form = submitEvent.target;
    
        qcm.question = form.question.value;
        qcm.theme = form.theme.value;
        qcm.bonneReponse = form.bonneReponse.value;
        qcm.reponses = form.reponses.value;

        const qcmJson = JSON.stringify(qcm);
        
        // Envoie de la requete
        if (qcm.question !== ''){
          return routes.createQcm(qcmJson)

          .then(() => {
              form.question.value = ""
              form.theme.value = ""
              form.bonneReponse.value = ""
              form.reponses.value = ""

              alert('qcm ajouté')
          })

          .catch((error) => {
            console.log(error);
          });
       }}

    return (
        <div className="addQcmContainer" >
            <Link to="/">go to menu</Link> 

            <form className="newMsgFrom" onSubmit={createQcm}>

                <label htmlFor="question">Question</label>
                <input type="text" name="question" id="question" ></input>


                <label htmlFor="theme">Theme</label>
                <select id="theme" name="theme">
                    <option value="geo">Géographie</option>
                    <option value="histoire">Histoire</option>
                    <option value="siences">Siences</option>
                </select>

                <label htmlFor="bonneReponse">bonneReponse</label>
                <input type="text" name="bonneReponse" id="bonneReponse" ></input>

                <label htmlFor="reponses">reponses</label>
                <input type="text" name="reponses" id="reponses" ></input>

                <button type="submit" >Add Qcm</button>
            </form>
        </div>
    )
}

export default AddQcm