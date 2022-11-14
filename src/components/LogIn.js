import React from 'react'


export default function SignIn({history}) {
	return (
		<form >
			<label>Email:</label>
			<input type='email' name='email'></input>
			<label>Password:</label>
			<input type='password' name='password'></input>
			<button>Login</button>
		</form>
	)
}