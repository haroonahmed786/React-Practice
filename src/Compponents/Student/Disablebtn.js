import React,{useState} from "react";

function Disable () {
     const  [username, setUsername] = useState(
        {
          Name:"",
          Email:"",
          Password:""
     });
     const [disable,setDisable] = useState (0);

     const updateField = e => {
          setUsername({
            ...username,
            [e.target.name]: e.target.value  
          });
        };
        const handleClick = (e) =>{
            e.preventDefault()
            setDisable(true);
        }
        return (
            <form onSubmit={handleClick}>
                <label>username:</label>
                <input 
                value={username.Name}
                name= "Name"
                onChange={updateField}
                />
                <br />
                 <label>Email:</label>
                <input 
                value={username.Email}
                name= "Email"
                type= "Email"
                onChange={updateField}
                />
                  <br />
                <label>Password:</label>
                <input 
                value={username.Password}
                name= "Password"
                type= "Password"
                onChange={updateField}
                />
                <br />
                <button style={{ padding: "10px 10px", backgroundColor: "whitesmoke" }}
                 name ="submit" disabled={disable}>Submit </button>
               
            </form>
        )
}

export default Disable;