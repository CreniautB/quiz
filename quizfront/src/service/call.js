import axios from 'axios';
const mainRoute = 'http://localhost:3001/question/'

const createQcm = function(qcmJson){
    return axios
      .post(mainRoute+"createQcm", qcmJson, {
        headers: {
          "content-type": "application/json",
        },
      })
  
  }

const getOneQuestion = function(){

  return axios
    .get(mainRoute+"getOneQuestion",{
      headers:{
        "content-type" : "application/json",
      },
    })

}

const sendResult= function(resultJson){

  return axios
    .post(mainRoute+"sendResult", resultJson,{
      headers:{
        "content-type" : "application/json"
      }
    })

}

const globalResult = function(){
  return axios
  .get(mainRoute+"globalResult",{
    headers:{
      "content-type" : "application/json",
    },
  })
}

  const routes = {createQcm, getOneQuestion, sendResult, globalResult}

  export default routes

