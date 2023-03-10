import React from 'react'
import MyImage from "../images/img.jpg"
import { Student4 } from './Student/Student';
 function Images(){
    const intro =[{
        name: "Haroon Ahmed",
        status: "junior developer",
        profession: "software engineer"
    }]
  return (
    <div>
        <Student4 intro = {intro} />
        <img src ={MyImage} alt="" border="5px solid black" />
    </div>
  )
}
export default Images;