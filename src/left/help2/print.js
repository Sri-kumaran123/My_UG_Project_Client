import React,{Component} from "react";
import './print.css';

class Print extends Component{
    today=new Date();
   fun() {
    
    return this.today.getDate();
   }
   fungm(){
     return this.today.getMonth();
   }
   funy(){
    return this.today.getFullYear();
   }
   funh(){
    return this.today.getHours();
   }
   funm(){
    return this.today.getMinutes();
   }
   fun2(){
       var today =new Date();
        return today.getTime();
   }
    
    render(){
        return(
            <div className="Print">
                <div className="P-head">
                    Nellai Sree Krishna Storse
                </div>
                <div className="tottt">Date: {this.fun()}/{this.fungm()}/{this.funy()}<br></br>
                Time: {this.funh()}.{this.funm()}
                </div>

                <table  cellPadding="0">
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Catagery</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        </tr>
                {this.props.val?
                this.props.val.map(x=>{
                    return(
                        <>
                        <tr>
                            <td>{x[0].id}</td>
                            <td>{x[0].Description}</td>
                            <td>{x[0].catagary}</td>
                            <td>{x[0].Price}</td>
                            <td>{x[1]}</td>
                            
                            
                            <td>{(x[0].Price)*x[1]}</td>
                        </tr>
                        </>

                    )
                }):null}
                </table>
                <div className="tottt">
                    Total amount of the bill is {this.props.v}
                </div>
                
                    
                
            </div>
        )
    }
}
export default Print;