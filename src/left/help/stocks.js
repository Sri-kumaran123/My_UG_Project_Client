import React,{useState} from "react";
import './stocks.css';
import SBox from "../help2/sbox";
import axios from 'axios';
import Popup from '../help2/popup';
import { GrAddCircle } from "react-icons/gr";

axios.defaults.baseURL="http://localhost:2000";

export default function Stocks(){
    //state vareable
    const [company,setCompany]=useState([]);
    const [bool,setbool]=useState(false);
    function uses() {
        setbool(false);
        
    }
async function func(){
    await axios.get('/getcompany').then(res=>{
         setCompany(res.data);
        console.log(res.data);
    })
    console.log("hi",company)
}


    return(
        <div className="Stocks" onClick={func}>
            <div className={`c-stocks ${bool?'blurb':null}`}>
                
                <h1>
                   <span> Suppling Companyes</span>
                   <span className="add-c" onClick={()=>{setbool(true)}}><GrAddCircle/></span>
                </h1>
                <div className="align-sbox">
                    
                    {company?null:func()}
                {company.map(x=>{
                    return <SBox value={x}/>
                })}
                </div>

            </div>
            <div>
                {bool?<Popup values="hi" uses={uses}/>:null}
                </div>

        </div>
    )
}
