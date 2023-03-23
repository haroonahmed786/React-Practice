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
	
	const handleClick =() => {
		console.log("Form data is",form)
             setShowData (!showData)
	}

	return (
		<div className='Login'>
			<h1>LoginForm</h1>
			{/* <form onSubmit={printValues}> */}
			<label>
				Username:
				<input
					value={form.username}
					name="username"
					placeholder='enter your username'
					onChange={(e) => {
						setForm({ ...form, username: e.target.value })
					}}
				/>
			</label>
			<br />
			<br />
			<label>
				email:
				<input
					value={form.email}
					name="email"
					type="email"
					placeholder='enter your email'
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
					onChange={(e) => {
						setForm({ ...form, password: e.target.value })
					}}
				/>
			</label>
			
			<br />
			<button style={{ padding: "10px 10px", backgroundColor: "whitesmoke" }}
			 onClick={handleClick}>{showData ? "hide data👍" : "show data"}</button>
		     
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
	);
}

export default Login;
