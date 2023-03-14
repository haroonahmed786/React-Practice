import React from "react";
import { useState } from "react"

const ArrayFilter = () => {
    const arr = [-3,-2,-1,0,1,2,3,4,5,6,7];
    ////////
     const arrData = [
        {
        name: "Siidiq",
        email: "siddiqgmail.com",
        age: 24

    },
 {
        name:"ali",
        email: "aligmail.com",
        age: 34

    }
];
//////

////////////
const initialState = [
  { id: 1, name: 'Banana', amount: 5 },
  { id: 2, name: 'Apple', amount: 6 },
];
const secondRemoved = initialState.filter((fruit) => fruit.id === 2);
////////
const initialStated = [
    { id: 1, name: 'Banana', amount: 5 },
    { id: 2, name: 'Apple', amount: 6 },
    { id: 3, name: 'Orange', amount: 10 },
    { id: 4, name: 'Watermelon', amount: 1 },
  ];

  const removed = initialStated.filter((key) => key.id === 1);
   const removed1 = initialStated.filter((key) => key.id === 3);
////////
  const dataArr = arrData.filter((key) =>{
    return key.email === "aligmail.com"
  })
  /////////
    const filterValueLessThan0 = arr.filter((key) =>{
        return key< "0"
        
    })
    const filterValueGreaterThan0 = arr.filter((key) =>{
        return key> "0"
        
    })


    console.log("this array is less than 0",filterValueLessThan0);
    console.log("this array is grater than 0",filterValueGreaterThan0);
    console.log("this arrData of gmail.com", dataArr);
    console.log("Remove object of the array",secondRemoved);
    console.log("Remove object of the array",removed,removed1);
    
    const [fruits, setFruits] = useState([
      { id: 1, name: "🍎 Apple" },
      { id: 2, name: "🍊 Orange" },
      { id: 3, name: "🍌 Banana" },
      { id: 4, name: "🍇 Grapes" },
    ])
    const deleteById = id => {
      setFruits(oldValues => {
        return oldValues.filter(fruit => fruit.id ==! 1)
      })
    } 
    const [car, setCar] = useState([
      {id:1, name:"ODDI"},
      {id:2, name:"HONDA"},
      {id:3, name:"CIVIC"}
    ]);
     const deleteById1 = id => {
           setCar(oldCar => {
            return oldCar.filter(car.id === id)
           })
        }
        
    return (
      
      
      
      <div className="App">
       <h1 className="h1">ArrayFilter</h1>
        <ul>
          {fruits.map(fruit => {
            return (
              <li key={fruit.id}>
                <span>{fruit.name}</span>
                <button onClick={() => deleteById1(fruit.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
        <div className="App">
       <h1 className="h1">ArrayFilter</h1>
        <ul>
          {car.map(car => {
            return (
              <li key={car.id}>
                <span>{car.name}</span>
                <button onClick={() => deleteById(car.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
      </div>
      
      
    )
    
  }
   

export default ArrayFilter;