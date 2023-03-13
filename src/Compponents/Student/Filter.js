import React from "react";

const ArrayFilter = () => {
    const arr = [-3,-2,-1,0,1,2,3,4,5,6,7];
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
const initialState = [
  { id: 1, name: 'Banana', amount: 5 },
  { id: 2, name: 'Apple', amount: 6 },
];
const secondRemoved = initialState.filter((fruit) => fruit.id !== 2);
  const dataArr = arrData.filter((key) =>{
    return key.age<30
  })
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
    return(
        <>
        <h1>
            Array Filter
        </h1>
        </>
    )
   
}
export default ArrayFilter;