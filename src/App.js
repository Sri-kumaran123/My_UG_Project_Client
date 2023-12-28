//import logo from './logo.svg';
import './App.css';
import Menu from './top/menu';
import Right from './right/right';
import Left from './left/left';
import React,{useState} from 'react';
import Wepsite from './wepsite';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:2000";
/* import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Dashboard from './left/help/dashboard'; */
//above give some problems

function App() {
const [v,setv]=useState(false)
const [a,seta]=useState(null);
function st(x,y){
  console.log("hi")
  if(x==="Admin"&&y==="Password"){
    console.log("hi")
    setv(true)
    seta({admin:"allow"})
  }
  else{
    
    axios.get('/getemp',{
      params:{
        Emp_ID:x
      }
    }).then(res=>{
      console.log("re",res.data[0])
      
      if(res.data[0]!==undefined&&res.data[0].Password==y){
        setv(true)
        seta({Emp_Id:x})
      }
      else{
        
        axios.get('/getuser',{
          params:{
            User_ID:x
          }
        }).then(res=>{
          
          if(res.data[0]!==undefined&&res.data[0].Password==y){
              setv(true)
              seta({User_ID:x})
          }
          else{
            alert("Invalid id or Password")
          }
        })
      }
    })
  }
  
}

function funcrest(){
  setv(false);
  seta(null);
}

 var val= <><header className="App-header">
 <Menu/>
</header>
<div className='Body'>
 <div className='r'>
  <Right v={a} fun={funcrest}/>
 </div>
 <div className='l'>
    <Left v={a}/> 
    
   
 </div> 

</div>
</>
  return (
    <div className="App">
      {a?val:<Wepsite v={st}/>}
    </div>
  );
}

export default App;
