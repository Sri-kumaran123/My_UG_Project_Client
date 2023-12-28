import React,{useState} from "react";
import './sbox.css';
import { GrAddCircle } from "react-icons/gr";
import {RiArrowRightSLine } from "react-icons/ri";
import {AiOutlineEye } from "react-icons/ai";


import axios from 'axios';
import Popup from './popup';

axios.defaults.baseURL="http://localhost:2000";

export default function SBox(props){
    const [open1,setOpen1]=useState(false)
    const [bool,setbool]=useState(false);
    function uses() {
        setbool(false);
        
    }
    return(
        <>
        <div className={`fh ${open1?'active1':'inactive1'}`}>
            
         <Delivery arg={props.value.Products}/>
        </div>
        
        <div className="S_box">
            <div className="d-h">
                
                {props.value.Name}
            </div>
            <div>
                 Order day on {props.value.Order_day} and Delivery at day {props.value.Supply_day}
            </div>
            
                
            
            <div className="bt" >
                <span className="mini-po" onClick={()=>{setbool(true)}}><GrAddCircle/></span>
                <span onClick={()=>{setOpen1(!open1)}} className={open1?'ro':null}>{<RiArrowRightSLine/>}</span>
            </div>
            <div>
                {bool?<Popup values={"pro"} id={props.value.Company_Id}uses={uses}/>:null}
                </div>
        </div>
        
        </>
    )
}

function Delivery(props){
    var arg=props.arg;
    console.log("i am arg",props.arg)
    
    return(
        <div className="t-class s-t">
            <table>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>company</th>
                
                <th>availablity</th>
                <th>catagery</th>
                <th></th>
                </tr>
                {arg?
                            
                            arg.map(x=>{
                                return (
                                    <>
                                    {console.log("x",x)}
                                         {<Row3 value={x} />} 
                                    </>
                                    
                                )
                            }):null}
            </table>

        </div>
    )
}

const Row3=(props)=>{
    const [v1,setv1]=useState([])
    console.log("row3",props.value)
    function func2(){
        axios.get("/getproduct",{
            params:{
                id:props.value
            }
        }).then(res=>{
           setv1(res.data[0])
           console.log("hi i am finaly come",v1)
       })
    
    }

    return(
        <tr onMouseOver={func2}>
            <td>{v1.id}</td>
            <td>{v1.Description}</td>
            <td>{v1.company}</td>
            
            <td>{v1.availablity}</td>
            <td>{v1.catagary}</td>
            <td><button className="b1-btn s"><AiOutlineEye/></button></td>
        </tr>
    )
}