import React,{Component} from "react";
import './right.css';
import Row from "./help/row";
import axios from 'axios';
import { Link } from "react-router-dom";

//base URL
axios.defaults.baseURL="http://localhost:2000";




class Right extends Component{

    constructor(){
        super();
        
        //for re render when we get value for user and employee
        this.state={
            x:[],
            y:[]
        }
        axios.get('/getuser').then(res=>{
            this.setState({x:res.data})
        })
        axios.get('/getemp').then(res=>{
         this.setState({y:res.data})
        })
        
      
      
    }
   v=[{name:"Home",value:"/",other:null},
   {name:"Billing",value:"bill",other:null},
   {name:"stocks",value:"stocks",other:null},
   {name:"User",value:"user",other:null},
   {name:"Employee",value:"emp",other:null},
   {name:"status",value:"status",other:null},
   {name:"history",value:"history",other:null},
   {name:"product",value:"product"},
   {name:"Performance",value:"perform",other:null},
   {name:"log out",value:"logout",other:null}
]

//for seting state value
 func() {
    this.v=[{name:"Home",value:"/",other:null},
    {name:"Billing",value:"bill",other:null},
    {name:"Supplyers",value:"stocks",other:null},
    {name:"User",value:"user",other:this.state.x},
    {name:"Employee",value:"emp",other:this.state.y},
    {name:"Status",value:"status",other:null},
    {name:"History",value:"history",other:null},
    {name:"Product",value:"product"},
    {name:"Performance",value:"perform",other:null}
 ]
}
    
    

 funcc(){
    if(this.props.v.Emp_Id){
        this.v=[{name:"Home",value:"/",other:null},
         {name:"Profile",value:`emp/${this.props.v.Emp_Id}`,other:null}]
        
    }
    else if(this.props.v.User_ID)
    this.v=[{name:"Home",value:"/",other:null},
    {name:"Profile",value:`user/${this.props.v.User_ID}`,other:null}]
    }

 
    refun(y){
  
        var e=window.confirm("are you confirm to quite")
        
        if(e){
        this.props.fun();
        }
        console.log("i am run")
    
    }


    render(){
        
          
        
        return(
        <div className="Right">
            
            <div className="container">
                {this.func()}
                {this.funcc()}
                {console.log("x",this.state.x,this.v)}
                
                <table cellSpacing={0} cellPadding={0}>

                {this.v.map(x=>{
                        return(
                            <tr><td >
                                
                                {<Row option={x.name} val={x.value} others={x.other} />}
                                </td></tr>
                        )
                    })}
                    <tr>
                        <td onClick={()=>{this.refun()}} className="spls"><span>Log Out</span></td>
                    </tr>
                </table>
            </div>

        </div>
        );
    }
}

export default Right;