import React, { useState } from 'react';

function Login() {
const [data, setData] = useState({
	username: '',
    email: "",
	password: ''
});
const [form, setForm] = useState({
	username: '',
    email : "",
	password: ''
});
const [submit, submitted] = useState(false);

const printValues = e => {
	e.preventDefault();
	setForm({
	username: data.username,
    email: data.email,
	password: data.password
	});
	submitted(true);
};

const updateField = e => {
	setData({
	...data,
	[e.target.name]: e.target.value 
    
	});
    e.target.reset();
    
};

return (
	<div className='Login'>
        <h1>LoginForm</h1>
	<form onSubmit={printValues}>
	<label>
		Username:
		<input
		value={data.username}
		name="username"
        placeholder='enter your username'
		onChange={updateField}
		/>
	</label>
    <br />
    <br />
    <label>
		email:
		<input
		value={data.email}
		name="email"
		type="email"
        placeholder='enter your email'
		onChange={updateField}
		/>
	</label>
	<br />
    <br />
	<label>
		Password:
		<input
		value={data.password}
		name="password"
		type="password"
        placeholder='enter your password'
		onChange={updateField}
		/>
	</label>
	<br />
    <br />
    <br />
	<button className='log' >Login</button>
    
	</form>
	

<p>{submit?form.username:null}</p>


<p>{submit?form.email:null}</p>

<p>{submit?form.password:null}</p>


</div>
);
}

export default Login;
