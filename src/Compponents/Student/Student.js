import "./Student.css"
export const Student = (props) => {
  return props?.data?.map((x) => (
    <div className="studentInfo"><li className="dot"> Name:{x?.name}<br />
      <li>Profession: {x?.profession} </li></li></div>
  ))
};

export const Student1 = (props) => {
  return props?.data?.map((y) => (
    <div className="studentdata"> My name is {y.name}<br />
      My profession is {y.profession}


    </div>))
};
export const Student2 = (props) => {
  return props?.arr?.map((z) => (<div className="Studentnew"> My name is {z.name}<br />
    and my cast is {z.cast}{z.profession}</div>))
};
export const Student3 = (props) => {
  return props?.names?.map((a) =>  (<div className="Studentnames">
    <li>
      Name:{a}
      </li>
    
    </div>
    ))
};
export const Student4 = (props) =>{
  return props?.intro?.map((n) =>(<div>
   <ol className="list">
    <li>{n.name}</li>
   <li>{n.status}</li>
   <li> {n.profession}</li>
   
    </ol>
  </div>))
};
export const Student5 = (props) =>{
  return props?.task?.map((t)=>(
  
    <div> 
      <ul>
        <li>My name is {t.name}</li>
        <li>Email is {t.email}</li>
        <li>age is {t.age}</li>
    </ul>
    </div>
  ))
}
export const Student6 = (props) =>{
  return props?.task?.map((t)=>{
    if(t.age > 50 ){return  <div>

      <ul>
      <li>above 50</li>
        <li>My name is {t.name}</li>
      <li>My email is {t.email}</li>
      <li>My age is  {t.age}</li>
      </ul>
      
    </div>
    };
    if(t.age <= 50 ){return  <div>
      <ul>
      <li>less than 50</li>
        <li>My name is {t.name}</li>
      <li>My email is {t.email}</li>
      <li>My age is  {t.age}</li>
      </ul>
      
    </div>
    };
  });  
};
 export const Arr1 = (props) =>{
  let a= props.x.filter((x)=>{
   return x.age> 50
  
  }

  )
  console.log(a);
}

