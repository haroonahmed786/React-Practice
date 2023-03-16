import React, { useState } from "react";
  function App1 (){
    const  [info, SetNames] = useState([
        {id:1, name:"Haroon", lName:"Ahmed", age: 22},
        {id:2, name: "Hamzah", lName:"Ejaz", age: 25},
        {id:3, name: "Hassam", lName:"Thakadar", age: 25},
            ])
     const  handleClick = (id) =>  {
        SetNames(oldName => {
            return oldName.filter(name => name.id !== id);
        }) 
     } 

     const [dogs, setDogs] = useState([
        {name:"pitBull"},
        {name:"germanShaperd"},
        {name:"labraDog" }
    ])
    const checkDelete = (xyz) =>{
    setDogs(oldName =>{
        return oldName.filter(name => name.name !== xyz);
    })
}
    const [count, setCount] = useState(0);

      const inCm = () =>{
    setCount (count + 1);
     }
     /////
     const [values,setValues] = useState (
        {name: "Haroon", lastName:"Ahmed"},
        {name: "Ali", lastName:"Hassan"}
     )
     const upDate = (xy) =>{
        setValues (oldN =>{
            return oldN.filter(name => name.name === xy);
        })
        
     }

 
    return(
        <div>
        <h1>FilterName</h1>
        <ul>
            {info.map(info => {
              return(
                <li key={info.id}>
                    <span>{info.name}  lastName is{info.lName} age is {info.age}</span>
                    <button className="btn" type="button" onClick={()=>handleClick(info.id)}>Click</button>
                </li>
            )
        })}
        </ul>  
        <ul>
            {dogs.map(dogs =>{
                return(
                    <li key={dogs.name}>
                        <span>{dogs.name}</span>
                        <button className="btn" type="button" onClick={() => checkDelete(dogs.name)}>Click!</button>
                    </li>
                )
            })}
        </ul>
        <h1>useState</h1> 
        <div className="inc">
            
          <h1>{count}</h1>
          <button  className="btn1" onClick={inCm}>Click</button>
         </div>
         <div>
            <ul>
            {values.map(values => {
                return(
                    <li key={values.name}>
                    <span>{values.name} and {values.lastName}</span>
                    <button onClick={()=>upDate (values.name)}></button>
                    </li>
                )
            })}
        </ul>
       
        </div>
        </div>
    )
    }

  export default App1;
  