import React from 'react'

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
       
    </div>
  )
}
export default Images;