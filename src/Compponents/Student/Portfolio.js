import React, { useState } from "react";
import MyImage from "../../images/man.jpg";

export const PortFolio = () => {
   const [asd, setInput] = useState ({
    Name: "",
    age:"",
    address:''
   });  

   const updateField = e =>{
    setInput({
        ...asd,
        [e.target.name]: e.target.value
    });
   }
   
    return(
    
        <div className="main">
            <div className="input">
            <div className="H">
            <h1 >HI!</h1>
            <h1>I AM HAROON AHMED</h1>
            <h1>FRONT-END DEVELOPER </h1>
            <div>
             <div className="About">
                <h6>ABOUT ME</h6>
                <h1>CREATIVE DESIGNER WITH</h1>
                <h1>MODERN TECHNIQUES</h1>
                <h7 className="h7">Hello, I’m HAROON AHMED, I'm a web designer and web developer. I have a passion for web developer and love to create for web and mobile devices.If you have a web based project that you want to get started.</h7>
            </div>
            <button className="cont" type="button">CONTACT US</button>
             </div>
            </div>
            <label>Name:</label>
            <input 
            value={asd.Name}
            name="Name"
            onChange={updateField}
            placeholder="enter your name"
            />
            <br />
            <label>age:</label>
            <input 
            value={asd.age}
            name="age"
            onChange={updateField}
            placeholder="enter your age"
            />
            </div>
            <div className="img">
             <img src ={MyImage} alt="" />
             </div>
             
        </div>
    )
}
