import React, { useRef, useState } from "react";
import {BrowserRouter as Redirect, Router, Switch,Route, Link} from "react-router-dom";

import './menu.css'
const Menu = () => {

    
    return (

        <div className="menuQcm" >


            <Link to="/qcm">Quizz de culture général</Link>
            
        </div>

    )

}



export default Menu