import React from "react";
import './box.css';

export default function Box(props){

    return(
        <div className="Box">
            {props.msg}

        </div>
    )
}