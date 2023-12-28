import React,{useState} from "react";
import './wepsite.css';

import img1 from './images/artem-gavrysh-F6-U5fGAOik-unsplash.jpg';
import img2 from './images/photo-1542838132-92c53300491e.jfif';
import img3 from './images/Arun-Website-Home-Page.jpg';
import img4 from './images/d7142ed84aa38a1b05eaa9b8b15f0717.jpg';
import img5 from './images/night-market-bangkok-thailand-wallpaper.jpg';


function Wepsite(props){
const [tx,settx]=useState({
  id:"",
  pass:""
})
  function onClick1(){
    
    props.v(tx.id,tx.pass)
  }
  function onc(e){
    var k={...tx};
    k[e.target.id]=e.target.value;
    settx(k)
  }

    return(
      
        <div className="wepsite">
          <div className="back">
            <img src={img5} />
            </div>
            <div className="welcome">
              <img src={img1}  width={"100%"}/>
            </div>
            
            <nav>
              <a>Nellai Sri krishna</a>
              <div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#abt">About</a></li>
                  <li><a href="#loc">Location</a></li>
                  <li><a href="#log">Log in</a></li>
                </ul>
              </div>
              
            </nav>
            <div className="msg">
              <h1>welcome</h1>
            </div>

            <div className="About" id="abt">
              <h1>About Us</h1>
                <div className="a-ch">
                  <div className="con">What is a Vegetable Market? A vegetable market is a type of building or structure created and designed in various colors, materials, shapes, sizes, and styles with accurate and specific fruit and vegetables.</div>
                  <div><img src={img2}/></div>
                </div>
                <div className="a-ch">
                <div><img src={img3}/></div>
                  <div className="con">Aavin is a State Government Cooperative under the ownership of Tamil Nadu Cooperative Milk Producers Federation Limited, Ministry of Cooperation, Government of Tamil Nadu and the trademark of Tamil Nadu Co-operative Milk Producers' Federation Limited. Aavin procures milk, processes it and sells milk and milk products to consumers.</div>
                  
                </div>
                <div className="a-ch">
                  <div className="con">What is a Vegetable Market? A vegetable market is a type of building or structure created and designed in various colors, materials, shapes, sizes, and styles with accurate and specific fruit and vegetables.</div>
                  <div><img src={img4}/></div>
                </div>
            </div>
            <div className="location" id="loc">
              <h1> Our Location</h1>
              <div className="if">
                <div>
                  
                    <h1>Nellai</h1> <h2>Shree
                    Krishna<br></br>
                    Stores
                  </h2><br></br><hr></hr>
                  <p>Teachers Colony,<br></br>
                  Karamadai<br></br>
                Coimbatore</p>
                </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d754.4454702265383!2d76.95486725095893!3d11.256758418574218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681656095886!5m2!1sen!2sin" width="950px" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
            <div className="Login" id="log">
                <div className="Log-from">
                <form>
                    <table>
                     <tr className="cen"><td><h1>Log in</h1></td></tr>
                     <tr><label>Id:</label></tr>
                     <tr><input id="id" onChange={(e)=>{onc(e)}}/></tr>
                     <tr><label>Password</label></tr>
                     <tr><input id="pass" onChange={(e)=>{onc(e)}} type="password"></input></tr>
                     <tr align="right"><button onClick={onClick1}>Submit</button></tr>
                    </table>
                    </form>
                </div>
            </div>
            <footer>
              <div className="waves">
                <div className="wave w1" ></div>
                <div className="wave w2" ></div>
                <div className="wave w3" ></div>
                <div className="wave w4" ></div>
                <div className="wave w5" ></div>
                <div className="wave w6" ></div>
                <div className="wave w7" ></div>
              </div>
              
              <div className="con-f">gmail:srik24946@gmail.com</div>
            </footer>

            
               </div>
    )
}

export default Wepsite;