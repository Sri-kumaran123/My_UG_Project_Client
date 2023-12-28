import React from "react";
import "./detail.css";

function Detail(props){
    var z=props;
    
const l_b=<div className="detail1">
<table>
   
    <tr>
        <th>
            no
        </th>
        <th>
            Date
        </th>
        <th>
            detail
        </th>
        <th>
            Pay
        </th>
        <th>
            Purchace
        </th>
    </tr>
    {((props.user).ddetail).map((x,ind)=>{
        return(
            <tr>
                <td>{ind}</td>
                <td>{x.date}</td>
                <td>{x.Detail}</td>
                <td className="g">{x.pay}</td>
                <td className="r1">{x.purchase}</td>
            </tr>
        )
  })}
  
</table>
<div className="B-btn">
                <button className="b2-btn">Pay</button>
            </div>
            <div className="Hide-scrol">

            </div>

</div>;
const ut1=<table>
<tr>
    <td className="w2d">
        Name
    </td>
    <td>
        {z.name}
    </td>
</tr>
<tr>
    <td>
        Id:
    </td>
    <td>{z.uId}</td>
</tr>
<tr>
    <td>
        Date of Joining
    </td>
    <td>
        {z.Doj}
    </td>
</tr>
<tr>
    <td>
        Phone
    </td>
    <td>
    {z.phone}
    </td>
</tr>
<tr>
    <td>
        age
    </td>
    <td>
    {z.age}
    </td>
</tr>
<tr>
    <td>
        Address
    </td>
    <td>
    {z.Address}
    </td>
</tr>
</table>;

const et1=<table>
<tr>
    <td className="w2d">
        Name
    </td>
    <td>
        {z.name}
    </td>
</tr>
<tr>
    <td>
        Id:
    </td>
    <td>{z.id}</td>
</tr>
<tr>
    <td>
        Date of Joining
    </td>
    <td>
        {z.Doj}
    </td>
</tr>
<tr>
    <td>
        Phone
    </td>
    <td>
    {z.phone}
    </td>
</tr>
<tr>
    <td>
        age
    </td>
    <td>
    {z.age}
    </td>
</tr>
<tr>
    <td>
        Address
    </td>
    <td>
    {z.Address}
    </td>
</tr>
</table>;


    return(
        <div className={`Detail1 ${z.uId?+"d1":+"d2"}`}>
            
            <div className={z.uId?"iande":"iande2"}>
             <div className="P-imge">
                   {z.uId?ut1:et1}
             </div>
             <div className="E-d">
                Edit details
             </div>
             <div className={`Name-u`} >
                
                </div>
            </div>
            
            {z.uId?l_b:null}
            
            

        </div> 
    )
}


export default Detail;