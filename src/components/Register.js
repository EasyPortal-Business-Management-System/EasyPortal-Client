import React from 'react'

export default function SignUp() {
	return (
		<div>
			<label>Username:</label>
			<input type="text" name='username'></input>
			<label>Email:</label>
			<input type='email' name='email'></input>
			<label>Password:</label>
			<input type='password' name='password'></input>
			<label>Password Confirmation:</label>
			<input type='password' name='password_confirmation'></input>
			<button>Register</button>
		</div>
	)
}