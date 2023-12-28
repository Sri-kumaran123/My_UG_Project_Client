import React,{useRef} from "react";
import './history.css';
import ReactToPrint from "react-to-print";
import Print from "../help2/print";

function History(props){
    var v={
        names:["BillId","Time","Amount"],
        values:[
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"},
            {billid:"101",time:"02.00",Amount:"4000"}
        ]
    }

    return(
        <div className="History">
            <div className="Page-Title">
                Previous Bills<hr></hr>
            </div>
            <div className=" this1">
                <table>
                <tr>
                    <th>{v.names[0]}</th>
                    <th>{v.names[1]}</th>
                    <th>Date</th>
                    <th>{v.names[2]}</th>
                    <th>Status</th>
                   
                </tr>
               {console.log("see ",props.v)}
                {(props.v).map(x=>{
                {console.log("see2",x)}
               return  <TD v={x}/> }
                )
                }
                
                </table>
            </div>
        </div>
    )
}

const TD=(props)=>{
    
    return(
        <tr>
            {console.log("see",props.v)}
            <td>{props.v.bill_id}</td>
            <td>{props.v.timeofbill}</td>
            <td>{`${props.v.Dateofbill}`}</td>
            <td>{props.v.Amount}</td>
            <td>{props.v.status}</td>
            
        </tr>
    )
}
export default History;