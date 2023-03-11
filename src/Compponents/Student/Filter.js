import React from "react";

const ArrayFilter = () => {
    const arr = [-3,-2,-1,0,1,2,3,4,5,6,7]
    const filterValueLessThan0 = arr.filter((key) =>{
        return key< "0"
        
    })
    const filterValueGreaterThan0 = arr.filter((key) =>{
        return key> "0"
        
    })
    console.log("this array is less than 0",filterValueLessThan0);
    console.log("this array is grater than 0",filterValueGreaterThan0);
    return(
        <>
        <h1>
            Array Filter
        </h1>
        </>
    )
}
export default ArrayFilter;