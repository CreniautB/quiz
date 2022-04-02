
import React, { useEffect, useRef, useState } from "react";



const Timer= ({seconds, setSeconds, isActive}) => {


    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);
   
      return(

        <div>
            <div className="time">
                {seconds}
            </div>

        </div>

    )

}

export default Timer