import React from "react";
import './flot.css';

export default function Float(props){
    function fun(x){
        return <div><a href={`#${x.id}`}>{x.name}</a></div>;
    }
    return(
        
        <div className="Float">
            
            {(props.v).map(x=>fun(x))}
            
        </div>
        
    )
}
