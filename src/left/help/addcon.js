import React,{useState} from "react";
import './addcon.css';
import Float from "../help2/flot";
import axios from 'axios';
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

axios.defaults.baseURL="http://localhost:2000";

function Addcon(props){
    const [data,setData]=useState({
    Emp_Id:" ",
    User_ID:" ",
    Name:" ",
    age:0,
    Address:" ",
    Date_of_joing:"",
    Salary:0,
    phone:0,
    userDetail:[    ],
    userPattern:{
        mostby:" ",
        weeklyMultytime:[]
    },
    Image:" ",
    Performance:{
        week1:["0","0","0","0","0","0","0"],
        week2:["0","0","0","0","0","0","0"],
        week3:["0","0","0","0","0","0","0"],
        week4:["0","0","0","0","0","0","0"],
        week5:["0","0","0","0","0","0","0"]
    },
    Password:"Password"
    })
    
    var values=[
        {name:"Add a new member",id:"top"},
        {name:"view existing members",id:"bottom"}
    ]

    function Exe(x){
        if(props.empName){
        return x;
        }
        return null;
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value;
       
       setData(newdata)

    }
    function sub(e){
        e.preventDefault();
        var v;
        if(props.empName){
        v={
            Emp_Id:funcid(data.Name,data.phone),
            Name:data.Name,
            age:data.age,
            Date_of_joing:data.Date_of_joing,
            Salary:data.Salary,
            Address:data.Address,
            phone:data.phone,
            Image:data.Image,
            Performance:data.Performance,
            Password:data.Password
       }
       
        axios.post('/addemp',v).then(res=>{
           if(res.data==="Succes"){
               alert("Employee data saved Succesfully")
           }
           else{
               alert("The Value already Exist")
           }
           props.re()
        })
    }
    else{
        v={
            User_ID:funcid(data.Name,data.phone),
            Name:data.Name,
            age:data.age,
            Date_of_joing:data.Date_of_joing,
            Address:data.Address,
            phone:data.phone,
            Image:data.Image,
            userDetail:data.userDetail,
            userPattern:data.userPattern,
            Password:data.Password
        }
       
        axios.post('/adduser',v).then(res=>{
            if(res.data==="Succes"){
                alert("User data Saved Succesfully")
            }
            else{
                alert("The Value Already Exist")
            }
            props.re()
           
        })
    }
   
    
    }
    function funcid(e,y){
        if(props.empName){
            let h='E'+'B10'+(e.length)+(y[3]);
            return h;
        }
        else{
        let h='U'+e[1]+'B12'+(e.length)+(y[3]);
        console.log(h)
        return h;
        }
        
    }

  

    var x=props.userName||props.empName;

    function re(){
        props.re()
    }
    return(
        <div className="Addcon" id={"top"}>
            
            <div className="Page-Title">Add a new {(Exe("Employee"))||"User"}<hr></hr></div>
            <form onSubmit={(e)=>sub(e)}>
            <table>
                
                
                <tr>
                    <td width={"150px"}>
                        <label>Name</label>
                    </td>
                    <td>
                        <input onChange={(e)=>handle(e)} id="Name"  type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>image</label>
                    </td>
                    <td>
                        <input type={"file"}  onChange={(e)=>handle(e)} id="Image"/>
                    </td>
                </tr>
               <tr>
                    <td>
                        <label>Date of Joining</label>
                    </td>
                    <td>
                        <input onChange={(e)=>handle(e)} id="Date_of_joing"  type="date"/>
                    </td>
                </tr>
                {Exe(<tr>
                    <td>
                        <label>Salary package</label>
                    </td>
                    <td>
                        <input onChange={(e)=>handle(e)} id="Salary"  type={"number"}/>
                    </td>
                </tr>)}
                
                
                <tr>
                    <td>
                        <label>Address:</label>
                    </td>
                    <td>
                        <textarea onChange={(e)=>handle(e)} id="Address"  type="text"/>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <label>phone:</label>
                    </td>
                    <td>
                        <input onChange={(e)=>handle(e)} id="phone"  type="texte"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>age:</label>
                    </td>
                    <td>
                        <input onChange={(e)=>handle(e)} id="age"  type={"number"}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={"2"} align={"center"}>
                                <input type="reset" className="b1-btn"/>
                                <input type="submit" value={"Save"}  className="b2-btn " />
                                
                    </td>
                    
                </tr>
                
            </table>
            </form>
            
            <Float v={values}/>
            <div className="bottom-ofadd" id={"bottom"}>
                <div>
                <table>
                    <tr>
                    {x.map(x=>{
                        return <BSbox val={x.Name} id={x._id} re={re} nav={x.Emp_Id?x.Emp_Id:x.User_ID} y={props.empName?"emp":"user"}/>
                    })}
                    </tr>
                    
                </table> 
                </div> 
                    
                
                

            </div>
            
            
            
        </div>
    )
}

function BSbox(props){

    function func(x,y) {
        if(y=="emp")
        axios.post('/deleteemp',{
            _id:x,
            do:"quick"
        }).then(res=>{
            console.log(res.data)
            if(res.data){
                alert("Deleted")
            }
            props.re()
        })
        else{
            axios.post('/deleteuser',{
                _id:x,
                do:'quick'
            }).then(res=>{
                
                if(res.data){
                    alert("Deleted")
                }
                props.re()
            })
        }
        
    }

    return(<td>
        <div className="BSbox">
            <div >{props.val}<br/><br/>
            <span>
                <Link to={`${props.nav}`}>
            <BsArrowRight/>
            </Link>
                </span>
            </div>
            <div className="i-d" onClick={()=>{func(props.id,props.y)}}>
                <RiDeleteBin6Line/>
                </div>
        </div></td>
    )
}



export default Addcon;