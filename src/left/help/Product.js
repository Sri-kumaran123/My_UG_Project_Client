import React from "react";
import './Product.css';
import Popup from "../help2/popup";
import { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import {GrAddCircle } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:2000";

function Product(props){
   const [v,setv]=useState(false);
   function func(){
    setv(false)
    props.re();
   }
   

   

    return(
        <>
        
        <div className={`Product`}>
        
        <div className={`${v?'blurb':null}`}>
            <div className="Page-Title">
                Product List
                <span className="edit" onClick={()=>{setv(true)}}><GrAddCircle/></span>
                <hr></hr>
            </div>
            <div className="t-class pro-t">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Company</th>
                        <th>Catagary</th>
                        <th>Availablity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    {
                        props.products.map(x=>{
                            return(
                                <tr>
                                    {console.log(x._id)}
                                    <td>{x.id}</td>
                                    <td>{x.Description}</td>
                                    <td>{x.company}</td>
                                    <td>{x.catagary}</td>
                                    <td>{x.availablity}</td>
                                    <td>{x.Price}</td>
                                    <td><Del x={x}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </table>
            </div>
            </div>
            {v?<Popup uses={func} />:null}
        </div>
        </>
    )
}
function Del(props){
    const [v1,setv1]=useState(false);
    function func(){
    axios.post('/deleteproduct',{
        _id:props.x._id
    }).then(res=>{
        if(res=="Deleted"){
            alert("Product deleted ")
        }
    
        
    })
    
       
    
}
function func1(){
    setv1(false)
   }
    return(
        <>
        <div className="del-pr">
                <div onClick={()=>{func()}}><RiDeleteBin6Line/></div>
                <div onClick={()=>{setv1(!v1)}}><BiEdit/></div>
                {v1?<Popup2 uses={func1} v={props.x}/>:null}
                 </div>
        </>
    )
}

function Popup2(props){
    

    const [v3,setv3]=useState(props.v)

    function handle(e) {
       
        var type={...v3}
       type[e.target.id]=e.target.value;
       setv3(type)
       
       
   }
   function submitp(){
    axios.post('/updateprodects',v3).then((res)=>{
        if(res){
            alert("Product updated succesfully")
        }
    })
    props.uses()
    console.log("see",v3)
   }
    return(<>
    <div className="pop-ta">
    <table >
                    <tr>
                        <td><label>Product_ID</label></td>
                        <td><input value={v3.id} type="text" id="id" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <td><input value={v3.Description} type="text" id="Description" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Company</label></td>
                        <td><input value={v3.company} type="text" id="company" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Catagary</label></td>
                        <td><select value={v3.catagary} id="catagary" onChange={(e)=>{handle(e)}}>
                            <option value={"Vegetable"} id="catagary">Vegetable</option>
                            <option value={"Ice Creams"} id="catagary">Ice Creams</option>
                            <option value={"Juice and Milk items"} id="catagary">Juice and Milk items</option>
                            <option value={"Grosery"} id="catagary">Grosery</option>
                            <option value={"Cleaning"} id="catagary">Cleaning</option>
                            
                            </select></td>
                    </tr>
                    <tr>
                        <td><label>SubCatagary</label></td>
                        <td><input value={v3.subcatagary} type="text" id="subcatagary" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Availablity</label></td>
                        <td><input value={v3.availablity} type="text" id="availablity" onChange={(e)=>{handle(e)}}/></td>
                    </tr>
                    <tr>
                        <td><label>Price</label></td>
                        <td><input value={v3.Price} type="text" id="Price" onChange={(e)=>{handle(e)}}/></td>
                    </tr> 
                    <tr >
                        <td></td>
                        <td>
                    <div className="p-d2">
               
                <button className="b1-btn" onClick={props.uses}>Close</button>
                <button className="b2-btn" onClick={()=>{submitp()}}>Submit</button>
            </div>
            </td>
                    </tr>
                </table>
                
            </div>
    </>)
}

export default Product;