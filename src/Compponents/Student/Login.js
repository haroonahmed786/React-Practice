import React, { useState } from 'react';

function Login() {

	const [form, setForm] = useState([
		{
		username: '',
		email: "",
		password: ''
	}
  ]);

	const [showData, setShowData] = useState(false);
	const [disable,setDisable] = useState(false);
	
	const handleClick =(e) => {
		 e.preventDefault()
             setShowData (!showData)
			 
	}

	return (
		<form  className='Login' onSubmit={handleClick}>
		<div>
			<h1>LoginForm</h1>
			
			<label>
				Username:
				<input
					value={form.username}
					name="username"
					placeholder='enter your username'
					disabled= {disable}
					onChange={(e) => {
						setForm({ ...form, username: e.target.value })
					}}
				/>
			</label>
			<br />
			<br />
			<label backgroundColor="white">
				email:
				<input
					value={form.email}
					name="email"
					type="email"
					placeholder='enter your email'
					disabled= {disable}
					onChange={(e) => {
						setForm({ ...form, email: e.target.value })
					}}
				/>
			</label>
			<br />
			<br />
			<label>
				Password:
				<input
					value={form.password}
					name="password"
					type="password"
					placeholder='enter your password'
					disabled= {disable}
					onChange={(e) => {
						setForm({ ...form, password: e.target.value })
					}}
				/>
			</label>
			
			<br />
			<button style={{ padding: "10px 10px", backgroundColor: "whitesmoke" }}
		
			 onClick={() => setDisable(!disable)}>{showData ? "Edit data👍" : "Submit data"}</button>
		     
			{showData? 
			  <div>
				{form.username},
				<br />
				{form.email},
				<br />
				{form.password}
			  </div>

				
			  
			
			: ""}

                         
		</div>
		</form>
		
		
	);
}

export default Login;
