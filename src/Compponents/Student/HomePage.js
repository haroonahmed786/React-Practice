import React from "react";
// import MyImage from "../../images/home.jpg";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
    const navigate = useNavigate()
    return (

        <div className="home">
         <button className="cont1" type="button" onClick={()=>navigate("/Disablebtn")}>LOGIN </button>

        </div>

    )
}