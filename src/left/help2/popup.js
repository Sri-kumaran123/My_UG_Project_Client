import React,{useState} from "react";
import "./popup.css";
import axios from 'axios';


axios.defaults.baseURL="http://localhost:2000";

const Popup=(props)=>{
    const [v,setv]=useState({
    id:"",
    Description:"",
    Price:null,
    company:"",
    availablity:"",
    catagary:"",
    subcatagary:"",
    avgSales:{
        day:"val"
    },
    pictime:"",
    profit:null,
    loses:null,
    type:{
        anything:null
    }
});
const [v3,setv3]=useState({
    Company_Id:"",
    Name:"",
    Order_day:"",
    Supply_day:"",
    Products:[],
    other:{
        gmail:null
    }
})

const [v4,setv4]=useState(null)

    const [v2,setv2]=useState(props.values)
    
    function handle(e){
        var type={...v};
        type[e.target.id]=e.target.value;
        setv(type);
    }
    function handle1(e){
        var type={...v2}
        type[e.target.id]=e.target.value;
        setv2(type)
    }
    function handle12(e) {
        if(props.values=="pro")
        {
            var type=v4;
            type=e.target.value;
            setv4(type)
        }
        else{
         var type={...v3}
        type[e.target.id]=e.target.value;
        setv3(type)
        }
        
    }
    function submit(){
        if(props.values){

            console.log("id:",v2.Emp_Id,v2)
            if(props.values.Emp_Id){
                axios.post('/updateemp',v2).then(()=>{
                    console.log("pls",v2)
                    props.uses()
                })
            }
            else if(props.values.User_ID){
                axios.post('/updateuser',v2).then(()=>{
                    props.uses()
                })

            }
            else if(props.values=="pro"){
                var q;
                axios.get('/getcompany',{
                    params:{
                        Company_ID:props.id
                    }
                }).then(res=>{
                    console.log("i am getting",res.data)
                    q=res.data[0].Products;
                    q.push(v4)
                    axios.post('/updatecompany',{
                        _id:res.data[0]._id,
                        Products:q
                    }).then(()=>{
                        props.uses()
                    })
                })
            }
            else{
                axios.post('/addcompany',v3).then((res)=>{
                    if(res){
                        alert("Sucess")
                    }
                    props.uses()
                })
            }
            //props.uses()
           
        }
        else{
        console.log("see first",v)
        axios.post('/addp',v).then((res)=>{
           if(res){
            alert("Prodect added")
           }
        })
    }
    props.uses();
    }
    function func(){
        if(props.values){
            return fun3(props.values);
        }
        else{
            return func2()
        }
    }
    
    function func2(){
        return(
            <>
            
                <table>
                    <tr>
                        <td><label>Product_ID</label></td>
                        <td><input type="text" id="id" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <td><input type="text" id="Description" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Company</label></td>
                        <td><input type="text" id="company" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Catagary</label></td>
                        <td><select  id="catagary" onChange={(e)=>{handle(e)}}>
                            <option value={"Vegetable"} id="catagary">Vegetable</option>
                            <option value={"Ice Creams"} id="catagary">Ice Creams</option>
                            <option value={"Juice and Milk items"} id="catagary">Juice and Milk items</option>
                            <option value={"Grosery"} id="catagary">Grosery</option>
                            <option value={"Cleaning"} id="catagary">Cleaning</option>
                            <option value={"Snacks"} id="catagary">Bisctes & Snacks</option>
                            
                            </select></td>
                    </tr>
                    <tr>
                        <td><label>SubCatagary</label></td>
                        <td><input type="text" id="subcatagary" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Availablity</label></td>
                        <td><input type="text" id="availablity" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Price</label></td>
                        <td><input type="text" id="Price" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                </table>
            </>
        )
    }
    function fun3(val){
       if(val.Emp_Id){
        return (<>
        <tr>
            <td><label>Image</label></td>
            <td><input id="Image"  type={"file"}  onChange={(e)=>{handle1(e)}}/></td>
        </tr>
            <tr>
                <td><label>Name</label></td>
            <td><input id="Name" value={v2.Name} type="text" onChange={(e)=>{handle1(e)}}/></td>
                
            </tr>
            <tr>
                <td><label>age</label></td>
                <td><input id="age" value={v2.age} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            <tr>
                <td><label>Date of Join</label></td>
                <td><input type="date" id="Date_of_joing" value={v2.Date_of_joing} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            <tr>
                <td><label>Salary</label></td>
                <td><input id="Salary" value={v2.Salary} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            <tr>
                <td><label>Phone</label></td>
                <td><input id="phone" value={v2.phone} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            <tr>
                <td><label>Address</label></td>
                <td><input id="Address" value={v2.Address} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input id="Password" type="password" value={v2.Password} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
        </>)
       }
       else if(val.User_ID){
        return(
            <>
            <tr>
            <td><label>Image</label></td>
            <td><input id="Image" type={"file"} onChange={(e)=>{handle1(e)}}/></td>
        </tr>
            <tr>
                <td><label>Name</label></td>
            <td><input id="Name" value={v2.Name} onChange={(e)=>{handle1(e)}}/></td>
                
            </tr>
            <tr>
                <td><label>age</label></td>
                <td><input id="age" value={v2.age} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            <tr>
                <td><label>Date of Join</label></td>
                <td><input type="date" id="Date_of_joing" value={v2.Date_of_joing} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            <tr>
                <td><label>Phone</label></td>
                <td><input id="phone" value={v2.phone} onChange={(e)=>{handle1(e)}} /></td>
            </tr>
            <tr>
                <td><label>Address</label></td>
                <td><input id="Address" value={v2.Address} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input id="Password" type="password" value={v2.Password} onChange={(e)=>{handle1(e)}}/></td>
            </tr>
            </>
        )
    }
    else if(props.values==="pro"){
        return(
            <tr>
        <td><label>add Product by ID</label></td>
        <td><input id="" onChange={(e)=>{handle12(e)}}/></td>
        </tr>
        )
    }
    else{
        return(
            <>
            <tr>
                <td>ID</td>
                <td><input id="Company_Id" onChange={(e)=>{handle12(e)}}/></td>
            </tr>
            <tr>
                <td><label>Company Name</label></td>
                <td><input id="Name" onChange={(e)=>{handle12(e)}}/></td>
            </tr>
            <tr>
                <td><label>OrderDay</label></td>
                <td>
                    <select id={"Order_day"} onChange={(e)=>{handle12(e)}}>
                        <option value={"Monday"} id={"Order_day"}>Monday</option>
                        <option value={"Tuesday"} id={"Order_day"}>Tuesday</option>
                        <option value={"Wednesday"} id={"Order_day"}>Wednesday</option>
                        <option value={"Thursday"} id={"Order_day"}>Thursday</option>
                        <option value={"Friday"} id={"Order_day"}>Friday</option>
                        <option value={"Saturday"} id={"Order_day"}>Saturday</option>
                        <option value={"Sunday"} id={"Order_day"}>Sunday</option>
                        
                    </select>
                </td>
            </tr>
            <tr>
            <td><label>Supply day</label></td>
                <td>
                    <select id={"Order_day"} onChange={(e)=>{handle12(e)}}>
                        <option value={"Monday"} id={"Supply_day"}>Monday</option>
                        <option value={"Tuesday"} id={"Supply_day"}>Tuesday</option>
                        <option value={"Wednesday"} id={"Supply_day"}>Wednesday</option>
                        <option value={"Thursday"} id={"Supply_day"}>Thursday</option>
                        <option value={"Friday"} id={"Supply_day"}>Friday</option>
                        <option value={"Saturday"} id={"Supply_day"}>Saturday</option>
                        <option value={"Sunday"} id={"Supply_day"}>Sunday</option>
                        
                    </select>
                </td>
            </tr>
            </>
        )
    }
    }
    
    return(
        <div className="Popup">
            <div className="popup2">
            <div className="p-d1">
            <table>
                {func()}
                {console.log("check",v2)}
            </table>
            </div>
            <div className="p-d2">
                
                <button className="b1-btn" onClick={props.uses}>Close</button>
                <button className="b2-btn" onClick={()=>{submit()}}>Submit</button>
            </div>
            </div>

        </div>
    )
}



const TD=(props)=>{

    function fun(v1){
        if(v1=="age"){
            return "number";
        }
        else if(v1=="DoJ"){
            return "Date";
        }
        else{
            return "text";
        }
    }
    return(
        <tr>
        <td>
            <label>{props.v[0]}</label>
        </td>
        <td>
            <input type={fun(props.v[0])} value={`${props.v[1]}`} />
        </td>
        </tr>
    )
}
export default Popup;