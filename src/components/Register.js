import React from 'react';
import { Button, Label, Input } from './Styled';

export default function SignUp({history}) {
	return (
		<form >
			<Label>First Name:</Label>
			<Input type='text' name='firstname'></Input>
			<Label>Last Name:</Label>
			<Input type='text' name='lastname'></Input>
			<Label>Email:</Label>
			<Input type='email' name='email'></Input>
			<Label>Password:</Label>
			<Input type='password' name='password'></Input>
			<Label>Confirm Password:</Label>
			<Input type='password' name='password'></Input>
			<Button>Sign Up</Button>
		</form>
	)
}