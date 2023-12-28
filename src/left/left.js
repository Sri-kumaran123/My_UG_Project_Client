import React,{Component} from "react";
import axios from 'axios';
import './left.css';
import Dashboard from "./help/dashboard";
import { Route, Routes} from "react-router-dom";
import Billing from "./help/billing";
import Stocks from "./help/stocks";
import Addcon from "./help/addcon";
import Detail from "./help/detail";
import Profile from "./help/profile";
import Status from "./help/status";
import History from "./help/history";
import Perform from "./Perform";
import Product from "./help/Product";


//base URL
axios.defaults.baseURL="http://localhost:2000";

class Left extends Component{


    constructor(){
        super();
        this.state={
            x:[],
            y:[],
            products:[],
            message:[],
            bill:[],
            product1:{
                veg:0,
                Gro:0,
                Ice:0,
                Clean:0,
                Snacks:0,
                puj:0
            },
            product2:{
                Morn:0,
                after:0,
                even:0,
                night:0
            },
            Billfull:[],
            restart:false
        }
        axios.get('/getuser').then(res=>{
            this.setState({x:res.data})
        })
        axios.get('/getemp').then(res=>{
         this.setState({y:res.data})
        })
        axios.get('/getproduct',{
            params:{
                default:"all"
            }
        }).then(res=>{
            this.setState({products:res.data})
            
            res.data.map(x=>{
                var k=this.state.product1;
                
                var day=new Date();
                
                switch(x.catagary){
                    case "Vegetable":
                      k.veg=Number(k.veg)+Number(x.avgSales[day.getDate()]?x.avgSales[day.getDate()]:0)
                      break;
                    case "Puja_List":
                      k.puj=Number(k.puj)+Number(x.avgSales[day.getDate()]?x.avgSales[day.getDate()]:0)
                      break;
                    case "Grocery":
                        k.Gro=Number(k.Gro)+Number(x.avgSales[day.getDate()]?x.avgSales[day.getDate()]:0)
                        break;
                    case "Ice Creams":
                        k.Ice=Number(k.Ice)+Number(x.avgSales[day.getDate()]?x.avgSales[day.getDate()]:0)
                        break;
                    case "Cleaning":
                        k.Clean=Number(k.Clean)+Number(x.avgSales[day.getDate()]?x.avgSales[day.getDate()]:0)
                        break;
                    case "Snacks":
                        k.Snacks=Number(k.Snacks)+Number(x.avgSales[day.getDate()]?x.avgSales[day.getDate()]:0)
                        break;
                    
                }
                
                this.setState({product1:k})
                console.log("see that bro",this.state.product1)
            })
        })
        
        axios.get('/messages').then(res=>{
            this.setState({message:res.data})
        })
        
        axios.get('/getbill').then(res=>{
            this.setState({Billfull:res.data})
            res.data.map(x=>{
                var k=this.state.product2;
                switch(Number(Math.round(x.timeofbill))){
                    case 6:
                    case 7:
                    case 9:
                    case 10:
                    case 11:
                        k.Morn=k.Morn+1;
                        break;
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                        k.after=k.after+1;
                        break;
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                        k.even=k.even+1;
                        break;
                    case 22:
                    case 23:
                        k.night=k.night+1;
                        break;
                    
                }
                this.setState({product2:k})
                console.log("see this also",this.state.product2)
            })
        })
    }
    
    user1
    funcb(x){
        this.setState({bill:x})
        console.log("gain",this.state.bill)
    }

    

    

   
    


    
    
       
    render(){

     
        const re=()=>{
            axios.get('/getuser').then(res=>{
                this.setState({x:res.data})
                console.log("sse3",res.data)
            })
            axios.get('/getemp').then(res=>{
                this.setState({y:res.data})
            })
        }
        const re2=()=>{
            axios.get('/getproduct',{
                params:{
                    default:"all"
                }
            }).then(res=>{
                this.setState({products:res.data})
            })
        }
            
        

        return(
            <div className="Left">
               {/*  <BrowserRouter>
                <div>
                
                    <switch>
                    <Route path="/" element={<Dashboard/>}/>
                    </switch>
                
                    </div>
                </BrowserRouter>
 */}



                <Routes>
                    <Route path="/" element={<Dashboard values={this.state.message}/>}/>
                    <Route path="/bill" element={<Billing values={this.state.products} fun={this.funcb} re={re}/>}/>
                    <Route path="/stocks" element={<Stocks/>}/>
                    <Route path="/user" element={<Addcon userName={this.state.x} re={re} empName={false}/>}/>
                    <Route path="/emp" element={<Addcon empName={this.state.y} re={re} userName={false}/>}/>
                    {this.state.x.map(x=>{
                        
                        console.log(`/user/${x.User_ID}`);
                        return <Route path={`/user/${x.User_ID}`} element={<Profile user={x} re={re} btn={this.props.v.User_ID?true:false}/>}/>
                     })}
                    {this.state.y.map(x=>{
                        console.log(`/user/${x.Emp_Id}`);
                        return <Route path={`/emp/${x.Emp_Id}`} element={<Profile emp={x} re={re} btn={false}/>}/>
                    })}
                    
                    
                    <Route path="/status" element={<Status val={this.state.product1} val2={this.state.product2}/>}/>
                    <Route path="/Product" element={<Product products={this.state.products} re={re2}/>}/>
                    <Route path="/perform" element={<Perform v={this.state.y}/>}/>
                    <Route path="/history" element={<History v={this.state.Billfull} />}/>
                    
                </Routes>
            </div>
        )
    }
}

export default Left;