import React,{useState} from "react";
import './status.css';
import Chart from "react-apexcharts";
import Float from "../help2/flot";
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

axios.defaults.baseURL="http://localhost:2000";
function Status(props){
    var v = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['Vegetable', 'Grocery Items', 'Ice Creams', 'Cleaning Items', 'Puja Items', 'Bisceit & Snacks']
          }
        },
        series: [
          {
            name: "series-1",
            data: [props.val.veg, props.val.Gro, props.val.Ice, props.val.Clean, props.val.puj, props.val.Snacks]
          }
        ]
      };
    var day=new Date();
    var datet=day.getDate();
    
    const [data,setdata]=useState(null)
    //   `${datet-3}`:0,
    //   `${datet-2}`:0,
    //   `${datet-1}`:0,
    //   `${datet}`:0
    // })
   // console.log("resaon",data.avgSales[`${datet-3}`],data.avgSales[`${datet}`],data.avgSales['13'])
    var v2={
      options: {
        chart: {
          id: "basic-bar2"
        },
        xaxis: {
          categories: [`${datet-3}`, `${datet-2}`, `${datet-1}`, `${datet}`]
        }
      },
      
      series: data?[
        {
          name: "series-1",
          data: [
            data.avgSales[`${datet-3}`]?Number(data.avgSales[`${datet-3}`]):0,
           data.avgSales[`${datet-2}`]?Number(data.avgSales[`${datet-2}`]):0
           ,data.avgSales[`${datet-1}`]?Number(data.avgSales[`${datet-1}`]):0,
            data.avgSales[`${datet}`]?Number(data.avgSales[`${datet}`]):0]
        }
      ]:[
        {
          name: "series-1",
          data:[0,0,0,0]
        }
      ]
    }
    

    
    
    const values=[
        {name:"Overall Performance",id:"overall"},
        {name:"Evaluvate using Daily updates",id:"daily"},
        {name:"time Periods",id:"time"}
    ]
    var v1=[props.val2.Morn,props.val2.after,props.val2.even,props.val2.night]
    var op={
      
      
        labels: ['Morning', 'Afternoon', 'Evening', 'Night']
      
    };
    const ch1=<div className="charts p-em">
    <Chart
      options={v2.options}
      series={v2.series}
      type="bar"
      width="700"
    />
    </div>;

    const ch2=<div className="charts p-em">
    <Chart
    options={op}
    series={v1}
    type="donut"
    width="700"/>
    {console.log("donut",props.val2)}
</div>;

const ch3=<div className="charts p-em">
<Chart
  options={v.options}
  series={v.series}
  type="radar"
  width="700"
/>

</div>

const [text,settext]=useState(" ");

function trig(e){
    
    v=e.target.value;
    settext(v);
}

function clbt(){
  axios.get('/getproduct',{
    params:{
      id:text
    }
  }).then(res=>{
    console.log("see res",res.data[0]);
    setdata(res.data[0])
  })
}
      
    return(
        <div className="Status">
            
            <div className="Page-Title">
                Status
                <hr></hr>
            </div>
            <div className="tats p-em" id="overall">
                overall status 
            </div>
            {ch3}
            <div className="tats2 p-em" id="daily">
                Daily Updates
                <hr></hr>
            </div>
            <div className="search p-em">
                <label>Enter any Product</label>
                <input placeholder={"Overall"} onChange={(e)=>{trig(e)}}/>
                <button className=" bttt" onClick={()=>{clbt()}}><FaSearch/></button>
            </div>
            {ch1}
            <div className="tats2 p-em"id="time">
                Time Zone performance
                <hr></hr>
            </div>
            {ch2}
            <div>
            <Float v={values}/>
            </div>
            
            
            


        </div>
    )
}

export default Status;