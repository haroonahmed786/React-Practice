import React,{useState} from "react";

function Disable () {
     const  [username, setUsername] = useState(
        {
          Name:"",
          Email:"",
          Password:""
     });
     const [disable,setDisable] = useState (false);
     

     const updateField = e => {
          setUsername({
            ...username,
            [e.target.name]: e.target.value  
          });
        };
        const handleClick = (e) =>{
            e.preventDefault()
          
        }
        
        return (
            <form className="Login-form" onSubmit={handleClick}>
              <h1>Login</h1>
                <label>username</label>
                <input 
                value={username.Name}
                name= "Name"
                onChange={updateField}
                disabled={disable}
                />
                <br />
                 <label>Email</label>
                <input 
                value={username.Email}
                name= "Email"
                type= "Email"
                onChange={updateField}
                disabled={disable}
                />
                  <br />
                <label>Password</label>
                <input
                value={username.Password}
                name= "Password"
                type= "Password"
                onChange={updateField}
                disabled={disable}
                />
                <br />
                <button style={{ padding: "10px 10px", backgroundColor: "whitesmoke" }}
                 className= "btn" name ="submit" onClick={() => setDisable(!disable)}>{disable ? "Edit": "Submit"}  </button>
                

                 {disable? 
                 <div>
                  {username.Name}
                  <br />
                  {username.Email}
                  <br />
                  {username.Password}
                 </div>
                 : ''}
            </form>
        )
}

export default Disable;