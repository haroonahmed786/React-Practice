import React from "react";
import Images from "./Compponents/Images";
import { Student, Student1, Student2, Student3, Student5, Student6 ,Arr1,} from "./Compponents/Student/Student";
import ArrayFilter from "./Compponents/Student/Filter";
import App1 from "./Compponents/Student/State";
import LoginForm from "./Compponents/Student/Form";
const Names = ['James', 'John', 'Paul', 'Ringo', 'George'];
const App = () => {
  const data=[{
    name:"Hamzah",
    profession:"Software Engineer"

},{
  name : "waqas",
  profession: "electrical enginering"
}]
const arr = [{
  name : "waqas",
  cast: "abbasi"
},{
  name : "Ali",
  profession:"sekteching"
}];
 
   const task = [{
    name: "Haroon",
    email :"haroon@gmail.com",
    age: 60
   },
  {
    name:"Hamza",
    email:"hamza@gmail.com",
    age : 50
  },{
    name:"khalid",
    email:"khalid@gmail.com",
    age: 40
  }];
  //// filtered Method()
    const x =[{
      name: "Haroon",
      email :"haroon@gmail.com",
      age: 60
     },
    {
      name:"Hamza",
      email:"hamza@gmail.com",
      age : 50
    },{
      name:"khalid",
      email:"khalid@gmail.com",
      age: 40
    }];
   
    
  return (
    <div className="Backgrnd">
      <h1 className="head">React-Practice</h1>
      {/* <Student data={data}/>
       <Student1 data={data} />
       <Student2 arr = {arr} />
        <Student3 names= {names} /> */}
        <div className="img1">
      <Images />
      <Images />
      </div>
      <Arr1 x={x} />
      {/* <Student5  task={task} /> */}
      {/* <div className="condition">
      <Student6 task={task} />
  
      </div>
  */}
    
     <div>
</div>
  <ArrayFilter />   
  <App1 />
  <LoginForm />
      </div>
       
         
  )
    }  
  
export default App;