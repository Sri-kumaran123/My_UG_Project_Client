import React from "react";
import { useState } from "react";
import './profile.css';
import Popup from "../help2/popup";
import Chart from "react-apexcharts";
import { BiEdit } from 'react-icons/bi';
import axios from 'axios';
import im from '../../images/25573184.jpg';
axios.defaults.baseURL="http://localhost:2000";


function Profile(props){

    const[bool2,setBool2]=useState(false);
   
    console.log("inside",props.user1)
    var bool1=props.user?true:false;
    const variable=props.user?props.user:props.emp;
    
        
   
    
    const p1=<img src={im} className="pic"/>
        
       
    const t1=<div className="p-table t1">
        <table>
            <tr>
                {console.log("se22",variable)}
                <td>ID</td>
                <td>{bool1?variable.User_ID:variable.Emp_Id}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{variable.Name}</td>
            </tr>
            <tr>
                <td>age</td>
                <td>{variable.age}</td>
            </tr>
            <tr>
                <td>Date_of_joing</td>
                <td>{variable.Date_of_joing}</td>
            </tr>
            <tr>
                <td>Phone</td>
                <td>{variable.phone}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>{variable.Address}</td>
            </tr>
           
           
            
        </table>
    </div>
    const t2=<div className="p-table t-class">
        <table>
            <tr>
                <th>no</th>
                <th>Date</th>
                <th>Detail</th>
                <th>pay</th>
                <th>Bill</th>
            </tr>
           {console.log(variable)}
           {<Ts2 v={variable.userDetail}/>}
           
        </table>
    </div>
   
        var v = bool1?null:{
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"]
              }
            },
            series: [
              {
                name: "week1",
                data: [variable.Performance.week1[0],
                     variable.Performance.week1[1],
                     variable.Performance.week1[2],
                     variable.Performance.week1[3],
                     variable.Performance.week1[4], 
                     variable.Performance.week1[5],
                     variable.Performance.week1[6]]
              },
              {
                name: "week2",
                data:[variable.Performance.week2[0],
                variable.Performance.week2[1],
                variable.Performance.week2[2],
                variable.Performance.week2[3],
                variable.Performance.week2[4], 
                variable.Performance.week2[5],
                variable.Performance.week2[6]]
              },
              {
                name: "week3",
                data:[variable.Performance.week3[0],
                variable.Performance.week3[1],
                variable.Performance.week3[2],
                variable.Performance.week3[3],
                variable.Performance.week3[4], 
                variable.Performance.week3[5],
                variable.Performance.week3[6]]
              },
              {
                name: "week4",
                data: [variable.Performance.week4[0],
                variable.Performance.week4[1],
                variable.Performance.week4[2],
                variable.Performance.week4[3],
                variable.Performance.week4[4], 
                variable.Performance.week4[5],
                variable.Performance.week4[6]]
              },
              {
                name: "week5",
                data: [variable.Performance.week5[0],
                variable.Performance.week5[1],
                variable.Performance.week5[2],
                variable.Performance.week5[3],
                variable.Performance.week5[4], 
                variable.Performance.week5[5],
                variable.Performance.week5[6]]
              }
            ]}
    
    const spl=<div className="chart-p">
        previous month
        <Chart
    options={bool1?null:v.options}
    series={bool1?null:v.series}
    type="heatmap"
    width="100%"
  /></div>
        

    const fun1=()=>{
        if(bool1){
            return(
                <>
                {p1}
                 {t1}
                </>
            )}
        else{
            return(
                <>
                {p1}
                {spl}
                </>
            )
        }
        }

    const fun2=()=>{
        if(bool1){
            return(
                <>
                 {variable.userDetail[0]?t2:null} 
                </>
            )
        }
        else{
            return(
                <>
                {t1}
                </>
            )
        }
    }
    const functot=()=>{
        var k=0;
        variable.userDetail.map(x=>{
            console.log("seeeee",x.pay,x.purchase)
            k=k+(x.pay-x.purchase)
        })
        return k;
    }
    const fun3=()=>{
        if(bool1){
            return(
                <div className="p-bottom">
                    <span>total :  {functot()}</span>
                <button className={`b2-btn ${props.btn?'d-none':null}`} onClick={paybal}>
                Pay Balance
                </button>
                </div>
                
            )
        }
    }
    function fun32(){
        function funwith(){
            setBool2(false);
           props.re();
        }
        if(bool2){
        return <Popup uses={funwith} values={variable} />;
        }
        
        
        
    }

    function paybal(){
        function inpaybal(){
            var x=Number(prompt("Enter Rupess to pay",0))
            var day=new Date()
            return {date:`${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`,
                    billid:"none",
                    pay:x,
                    purchase:Number(0)}
        }
        var k=variable.userDetail;
        k.push(inpaybal())
        axios.post('/updateuser',{
            User_ID:variable.User_ID,
            userDetail:k
        })
    }

    return(
        <div className={`P-Profile `} >
        <div className={`Profile ${bool2?'blurb':null}`}>
            <div className="p-Right">
                
                {fun1()}
                <div className="edit" onClick={()=>setBool2(true)}>
                    <BiEdit/>
                    {console.log(bool2)}
                </div>

            </div>
            <div className="p-Left">
                {fun2()}
                
            </div>
            
            <div className="h-s">
           
            </div>
            
            
        </div>
        {fun3()}
        {fun32()}
        
        </div>
    )
}

function Tr(props){
    return(
        <tr>
            {(props.v).map(x=><Td v={x}/>)}
        </tr>
    )
}
function Td(props){
    return(
        <td>
            {props.v}
        </td>
    )
}
function Ts2(props){
    return(<>
        
            {
                (props.v).map((y,x)=>{
                    return(
                        <tr>
                        <td>{x+1}</td>
                        <td>{y.date}</td>
                        <td>{y.billid}</td>
                        <td>{y.pay}</td>
                        <td>{y.purchase}</td>
            
                        </tr>
                    )
                })
            }
        
        </>
        
    );
}

export default Profile;