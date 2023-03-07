import { Student, Student1, Student2, Student3 } from "./Compponents/Student/Student";


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
const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

  return (
    <div>
      <Student data={data}/>
       {/* <Student1 data={data} />
       <Student2 arr = {arr} /> */}
        <Student3 name= {names} />
      
      </div>
  )
  }  
export default App;