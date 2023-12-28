import React,{useState} from "react";
import './Perform.css';
import axios from 'axios';
axios.defaults.baseURL="http://localhost:2000";

 const Perform=(props)=>{
//state
    const [tx,settx]=useState(null);
    //variable
    var dList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var wekl=[" ","week1","week2","week3","week4","week5"]
    var d={
        day:null,
        week:null,
        sendvalue:[]
    }

    function func(){
        var today=new Date();
        var day=today.getDay();
        d.day=day
    }
    function func2(){
        var today=new Date();
        var daym=today.getMonth();
        var dayy=today.getFullYear();
        
        var day2=new Date(`${daym+1}/01/${dayy}`)
        var time=Math.abs(today-day2)
        var days=Math.ceil(time/(1000*60*60*24))
        var ans=Math.ceil(days/7);
        
        d.week=wekl[ans];
    }
    
    function fun3(e){
        console.log("see",e.target.id)
       
        console.log(tx)
        console.log("send",d.sendvalue[d.day])
        // d.sendvalue[d.day]=tx
        console.log("see again again",d.sendvalue[e.target.id])
        axios.post('/updateemp',{
            ch:true,
            week:d.sendvalue[e.target.id],
            _id:e.target.id
        }).then(res=>{
            console.log(res);
        })
    }
    function fun4(e){

        settx(e.target.value)
    }
    function fun5(weekvalue){
        console.log("see",weekvalue);
        
        d.sendvalue[weekvalue._id]=weekvalue.Performance;
        console.log(d.sendvalue)
        switch(d.week){
            case "week1":
                d.sendvalue[weekvalue._id].week1[d.day]=tx;
                break;
            case "week2":
                d.sendvalue[weekvalue._id].week2[d.day]=tx;
                break;
            case "week3":
                d.sendvalue[weekvalue._id].week3[d.day]=tx;
                break;
            case "week4":
                d.sendvalue[weekvalue._id].week4[d.day]=tx;
                break;
            case "week5":
                d.sendvalue[weekvalue._id].week5[d.day]=tx;
                break;
           }
           console.log("see again",d.sendvalue);
    }

    return(
        <div className="Perform">
            <div className="Page-Title">
                    Employer Performance
                    <hr></hr>
            </div>
            
            
            <div className="t-class tt">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th> week</th>
                        <th>day </th>
                        <th>hours work</th>
                        <th></th>
                    </tr>
                    {props.v.map(x=>{
                        return(<tr>
                            {func()}
                            {func2()}
                            {console.log("i am",x)}
                            <td>{x.Emp_Id}</td>
                            <td>{x.Name}</td>
                            <td>
                                {console.log("con",x)}
                                {d.week}
                                {fun5(x)}
                            </td>
                            <td>
                                
                                {dList[d.day]}
                                
                            </td>
                            <td>
                                <input id="da" type="number" onChange={(e)=>{fun4(e)}}/>
                            </td>
                            <td>
                                <button id={x._id} className={"b1-btn"} onClick={(e)=>{
                                    fun3(e)}}>Save</button>
                            </td>
                        </tr>)
                    })}
                </table>
            </div>
        </div>
    )

}
export default Perform;