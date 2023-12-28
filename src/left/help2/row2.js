import React,{useState} from "react";
import './row2.css';

export default function Row2(props){

    const [track,setTrack]=useState(null);
    const f= function(){
        props.v3(props.value.id,track,props.v2)
        console.log(props.value.id)
        console.log("change value",track)
    }
    const setvalue=(e)=>{
        setTrack(e.target.value);
       
    }
    return(
        < tr className="Row2">
                {console.log(props.v2,props.value)}
                <td>{props.value.id}</td>
                <td>{props.value.Description}</td>
                <td>{props.value.Price}</td>
                <td>{props.value.company}</td>
                <td>{props.value.availablity}</td>
                {props.v4?
                  <td>{props.v4}</td>  :
          
                <td><input onChange={(e)=>{setvalue(e)}} type="number" min={props.value.type.min?props.value.type.min:"0"} max={props.value.availablity} step={props.value.type.step?props.value.type.step:"1"}/></td>
                }
                <td><button onClick={f}>{props.v2}</button></td>
                {(props.second)?
                    <td><button >edit</button></td>:null
                }
                
            
        </tr>
    )
}