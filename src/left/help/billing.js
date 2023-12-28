import React,{useState,Component,useRef} from "react";
import './billing.css';
import Row2 from "../help2/row2";
import axios from 'axios';
import ReactToPrint from "react-to-print";
import Print from "../help2/print";

//default URL
axios.defaults.baseURL="http://localhost:2000";

function Billing(props){
    
    //variable
    let head=<tr>
        <th>ID</th>
        <th>Description</th>
        <th>Price</th>
        <th>Company</th>
        <th>Stocks</th>
        <th>Qty</th>
        <th></th>
    </tr>

//state for getting text

const [rdata,setrData]=useState({id:null,Description:null,catagary:null})
const [v1,setv1]=useState(null);
const [v12,setv12]=useState(null);
const [v2,setv2]=useState(null);
const [bill,setBill]=useState(null);
const [print,setprint]=useState(null);
const [saveBill,setsaveBill]=useState({
    bill_id:"",
    Dateofbill:Date,
    Month:"",
    timeofbill:"",
    Amount:0,
    status:"",
    Product:[]
})
const [bool3,setbool3]=useState(false);

//fuction for typeing in text box


const ontype=(e)=>{
    var Rdata={...rdata};
    Rdata[e.target.id]=e.target.value;
    setrData(Rdata);
}

        //function for save value to state variable or prepare for send request

const onsub=(e)=>{
    e.preventDefault();
   console.log(rdata.catagary)
    axios.get("/getproduct",{
         params:{
             id:rdata.id,
             Description:rdata.Description,
             catagary:rdata.catagary

         }
     }).then(res=>{
        setv1(res.data)
        console.log("hi i am finaly come",v1)
    })
 
}
// functions for second tables...

async function getbill(){
    
   try{bill.map()}
   catch(e){
    setv2(null)
   }
    console.log(bill)
    
    console.log("get axi",v12) 
    console.log(props.values)
    var b=[];
    v12.map(x=>{
        
            bill.map(y=>{
                console.log("send",y.id,y.id)
                if(y.id==x.id){
                    b.push([x,y.value]);
                    setv2(b);
                    console.log("hi",v2)
                    
                }
            })  
    })
    
    
    
    }

//function for add item to bill

 function addbill(iad,v,ch){
    
    if(ch==="Add"){
    var b=bill?bill:[];
     b.push({
            id:iad,
            value:v
            })
            
    setBill(b)
   
    getbill()
    
    
        }
        else{
            
            bill.map(x=>{
                if(x.id===iad){
                    
                    var id=bill.indexOf(x);
                    delete bill[id];
                    console.log("after delete",bill);
                    
                    getbill();
                    
                }
            })
        }
        setv12(props.values)
   
}

const [pr,setpr]=useState(v2)
function sfunc(){
    console.log("see pro",v2)
       setpr(v2)
    updatepro()
}

//small var

function funcadd(){
    var y=0;
    if(v2){
        v2.map(x=>{
            y=y+(Number(x[1])*(Number(x[0].Price)))
        })

    }
  
    return y;
}

function updatepro(){
    if(v2){
        
        v2.map(x=>{
            console.log(x)
            console.log("see",x[0].avgSales)
            var v=(x[0].avgSales)
            var today=new Date();
            var c=today.getDate();
            v[c]=v[c]?(Number(v[c])+Number(x[1])):x[1]
        axios.post('/updateprodects',{
            _id:x[0]._id,
            avgSales:v,
            availablity:(x[0].availablity-x[1])
        })
        console.log("see pro",{
            _id:x[0]._id,
            avgSales:v,
            availablity:(Number(x[0].availablity)-x[1]),
            con:x[0].availablity
        })
     })
    }
    
}


function funcsavebill(x,y,z){
    var day=new Date();
    const func=()=>{
        return 'B'+(Math.floor(Math.random()*100))+'0'+day.getFullYear();
    }
    console.log("seeeeee",{
        bill_id:func(),
        Dateofbill:`${day.getDate()}/${day.getMonth}/${day.getFullYear}`,
        
        timeofbill:`${day.getHours()}.${day.getMinutes}`,
        Amount:y,
        status:x?"Payed":z,
        Product:z,
    })
    
        axios.post('/addbill',{
            bill_id:func(),
            Dateofbill:`${day.getDate()} / ${day.getMonth()+1} / 2023`,
           
            timeofbill:`${day.getHours()}.${day.getMinutes()}`,
            Amount:y,
            status:x?"Payed":z,
            Product:z,
        }).then((res)=>{
            props.re();
           alert("bill aded")
           console.log(res.data)
        })
    
    return func()
}
const componentRef=useRef();

function saveus(x,y){
    
    var day=new Date();
    function infunc(){
        return {
            date:`${day.getDate()}/${day.getMonth()}/${day.getFullYear()}`,
            billid:i,
            pay:0,
            purchase:funcadd()
        }
    }
    setbool3(true)
    var v=prompt('enter user id',null)
    alert(v)
    var i=funcsavebill(false,funcadd(),v)
    axios.get('/getuser',{
        params:{
            User_ID:v
        }
    }).then(res=>{
       var k= res.data[0].userDetail;
       console.log(infunc(),k,res.data)
       k.push(infunc())
       axios.post('/updateuser',{
        User_ID:v,
        userDetail:k


    })
    updatepro()
    })
    
}

    return(
        
        <div className="Billing" >
            
            <table>
                <tr>
                    <td>
                        <div className="Page-Title" >
                            Billing Page<hr></hr>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <form>
                            <div className="f" >
                            <span><label>Product id:</label>
                            <input type="text" id="id" onChange={(e)=>ontype(e)} /></span>
                            <span><label>Name:</label>
                            <input type="text" id="Description"onChange={(e)=>ontype(e)} /></span>
                            <span><label>Catagory:</label>
                            <select onChange={(e)=>ontype(e)} id="catagary" className="selectone">
                                <option value={null} id="catagary">--Select One--</option>
                                <option value={"Vegetable"} id="catagary">Vegetable</option>
                                <option value={"Grosery"} id="catagary">Grocery Items</option>
                                <option value={"Ice Creams"} id="catagary">Ice Creams</option>
                                <option value={"Cleaning"} id="catagary">Cleaning Items</option>
                                <option value={"Puja_List"} id="catagary">Puja List</option>
                                <option value={"Snacks"} id="catagary">Bisceit & Snacks</option>
                            </select>
                            </span>
                            </div>
                            
                            <div className="b b1-box">
                            <button  className="b1-btn" onClick={(e)=>onsub(e)}>submit</button>
                            </div>
                        </form>
                        <hr></hr>
                    </td>
                </tr>
                <tr>
                    <td className="s-h">Stocks availablity</td>
                </tr>
                
                <tr className="forh">
                    <div className="t-class data">
                        <table>
                            
                            {v1?head:null}
                            
                            {v1?
                            
                            v1.map(x=>{
                                return (
                                    <>
                                       
                                        {<Row2 value={x} v2={"Add"} v3={addbill}/>}
                                    </>
                                    
                                )
                            }):<div className="emp">
                                <h1>"Empty"</h1>
                            </div>}
                            </table>
                            
                    </div>
                    <div className="h-sb"></div>
                    <hr></hr>
                </tr>
                
                
                <tr>
                    <td className="s-h">
                        
                        Added to Bill
                    </td>
                </tr>
                <tr className="forh">
                    <div className="t-class data" >
                    <table>
               
                    {console.log("try",v2)}
                            {v2?head:null}
                            
                            {v2?
                            
                            v2.map(x=>{
                                return (

                                    <>
                                         
                                          <Row2 value={x[0]} v2={"Remove"} v3={addbill} v4={x[1]?x[1]:"0"}/> 
                                    </>
                                    
                                )
                            }):<div className="emp">
                                <h1>"Empty"</h1>
                            </div>}
                            </table>
                    </div>
                    <div className="h-sb"></div>
                </tr>
                <tr>
                    {v2? <div>
                    
                    total:   {funcadd()}
                </div>:null}
                    
                    <td className="f-b b2-box" >
                        <button onClick={saveus}>
                       <button className="b2-btn" >
                        after Pay
                       </button>
                       </button>
                        <button onClick={()=>{sfunc();funcsavebill(true,funcadd(),v2)}} >
                        <ReactToPrint 
                            trigger={()=><button className="b2-btn" >Finish</button>}
                            content={()=>componentRef.current}
                        />
                        </button>
                         
                        
                    </td>
                </tr>
                
            </table>
            <div className="d-none-f">
               
            <Print ref={componentRef}  val={v2} v={funcadd()}/>
            </div>
            
                           
        </div>
    )
}


export default Billing;