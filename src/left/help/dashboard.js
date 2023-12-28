import React,{useState} from "react";
import './dashboard.css';
import Box from "./box";
import axios from 'axios';


axios.defaults.baseURL="http://localhost:2000";

export default function Dashboard(props){
    const [msg1,setMsg1]=useState(props.values)
    

//display when we not getting any values

    let none=<div className="no-Msg">
        no message are recived
        <div>
            Message box Empty
        </div>
    </div>

//display when we getting values

    let msg=<div className="Msg">Message are</div>

//function for hedling message receve or not

    function func(){
        console.log(msg1);
        if(msg1&&msg1[0]){
            return(
            <>
            
            {msg}
            {(msg1).map(x=>{
                if(x){
                    return  <Box msg={x}/>
                }
                return null;
                
            }
            
           )}
            <span onClick={clear}>Clear</span>
            </>
            )
        }
        else{
            return none;
        }
    }
//function for clear
    
    function clear(){
        setMsg1(null);
    }
  

//main return function of the file
    return(
        <div className="Dashboard" >
            <table >
                <tr>
                    <td >
                        <div className="Page-Title">Welcome
                        <hr></hr>
                        </div>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="b-msg">
                            {func()}
            
           
                            
                            
                        </div>
                    </td>
                </tr>
            </table>


        </div>
    )
}