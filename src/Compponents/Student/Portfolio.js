import React from "react";
import MyImage from "../../images/man.jpg";
import { useNavigate } from "react-router-dom";

export const PortFolio = () => {
  const navigate = useNavigate()
   
    return(
    
        <div className="main">
           
            <div className="H">
            <h1 className="headh">HI!</h1>
            <h1 className="headh">I AM HAROON AHMED</h1>
            <h1 className="headh">FRONT-END DEVELOPER </h1>
            <div>
             <div className="About">
                <h6>ABOUT ME</h6>
                <h1>DEVELOPER OF FRONT-END </h1>
                
                <h7 className="h7">Hello, I’m HAROON AHMED, I'm a  web developer. I have a passion for web developer and love to create for web and mobile devices.If you have a web based project that you want to get started.</h7>
            </div>
            <button className="cont" type="button" onClick={()=>navigate("/Disablebtn")}>LOGIN </button>
            <button className="cont" type="button" onClick={()=>navigate("/HomePage")}>HOME </button>
             </div>
           
            </div>
            <div className="img">
             <img src ={MyImage} alt="" />
             </div>
             
        </div>
    )
}
  





