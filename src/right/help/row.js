import React,{useState} from "react";
import './row.css';
import { Link } from "react-router-dom";
import {RiArrowRightSLine } from "react-icons/ri";




export default function Row(props){
    //state value set up
    const [open,setOpen]=useState(false);
    var v1=<>
     <div className="Row">
            <Link to={props.val} className={"li"}> 
            <div className={open?'a':null}><span>{props.option}</span>
                 <span className={`nu `} onClick={()=>{setOpen(!open)} }>
                   <p> {props.others?<RiArrowRightSLine/>:null}</p>
                </span>
            </div>
            </Link>
        </div>
        <div className={`mini ${open?'activie':'inactive'}`}>
        {props.others?
            props.others.map(x=>{
                return(
                <div>
                    <Link to={props.val+"/"+(x.Emp_Id?x.Emp_Id:x.User_ID)} className={"li2"}>
                        <div>{x.Name} </div>
                    </Link> 
                </div>
                )
            })
        :null}
        </div>
    </>
    



    return(
        <>
       {v1}
        </>
    )
}