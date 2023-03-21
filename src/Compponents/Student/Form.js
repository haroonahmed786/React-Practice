import React,{useState} from "react";

function LoginForm() {
    // const [form, setState] = useState({
    //   username: '',
    //   password: ''
    // });
  
    // const printValues = e => {
    //   // e.preventDefault();
    //   // console.log(form.username, form.password);
    // };
  
    // const updateField = e => {
    //   setState({
    //     ...form,
    //     [e.target.name]: e.target.value  
    //   });
    // };

    const [data, setData] = useState(
      {
        name: "",
        email: "",
        age:"",
        address:""
      }
    )
    const [showData, setShowData] = useState(false);

  
     const updateData  = e =>{
      setData({
        ...data,
        [e.target.name] : e.target.value
       })
     }
  //  // State for username
  //  const [name, setName] = useState("jon doe");
  
  //  // Function to change name
  //  function changeName(e) {
  //    setName(e.target.value);
  //  }
  console.log("Show data is",showData)
    return (
      
      <div>
      {/* <form onSubmit={printValues}>
        <label>
          Username:
          <input
            value={form.username}
            name="username"
            onChange={(e)=>{
              setState({
                ...form,
                username: e.target.value  
              });
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={(e)=>{
              setState({
                ...form,
                password: e.target.value  
              });
            }}
          />
        </label>
        <br />
        <button onClick= {printValues}>Submit</button>
      </form>
      <div>
      <h1>Your agent name is :</h1>
      <h2>{name}</h2>
      <input value={name} onChange={changeName} ></input>
      <button>change</button>
    </div>
    <br /> */}
{/* 
    <div className="form">
      <h1><i>Form Page :~</i></h1>
      <form onSubmit={updateData}> 
       <label>
           name:
           <input
             value={data.name}
             name="name"
             placeholder="enter your name"
             onChange={(e)=>{
               setData({
                 ...data,
                 name: e.target.value  
               });
             }}
           />
       </label>
       <br />
       <br />
       <label>
        email:
        <input  
        value={data.email}
        email="email"
        placeholder="enter your email"
        onChange={(e) =>{
           setData({
            ...data,
            email: e.target.value
           });
        }}
        />
       </label>
       <br />
       <br />
       <label >
       
        age:
        <input 
         value={data.age}
         age = "age"
         placeholder="enter your age"
         onChange={(e) =>{
             setData({
              ...data,
              age: e.target.value
             });
         }}
        />
       </label>
       <br />
       <br />
       <label>
        address:
        <input 
        value={data.value}
        address="address"
        placeholder="enter your address"
        onChange={(e) =>{
          setData({
            ...data,
            address:e.target.value
          });
        }}
        />
       </label>
       <br />
       <br />
       <div className="sign">
       <button  className="sh" onClick={(e,x)=> {
        e.prevent.default()
        setShowData(!x)}}>SignIn</button>
   
       {/* {showData?
       data?.map((x) =>(
          <div>
            <li>{x.name}</li>
           <li> {x.email}</li>
            <li>{x.password}</li>
            </div>
         )
  //       )
  //      :""} */}
  {/* //      </div> */}
  {/* //     </form> */}
  //    </div>
  //    </div> */}
    );

  }
  
  export default LoginForm;