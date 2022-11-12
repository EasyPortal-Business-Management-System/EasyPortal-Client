import React, { useState, useEffect } from "react";
import day from "../data/day.json";
import start_time from "../data/start_time.json";
import finish_time from "../data/finish_time.json";
import employee_name from "../data/employee_name.json";
import { Container, Card, Grid, Typography, NativeSelect, Checkbox, InputLabel, FormControlLabel } from "@mui/material";
import { Button } from "react-bootstrap";

const Form = ({ buttonLabel, handleSubmit, errorMessage, roster }) => {
	const initialFormState = {
		employee_name: '',
		day: '',
		start_time: '',
		finish_time: ''
	};
	const [formState, setFormState] = useState(initialFormState);

	useEffect(() => {
		roster &&
			setFormState({
				employee_name: roster.employee_name,
				day: roster.day,
                start_time: roster.start_time,
                finish_time: roster.finish_time
			});
	}, [roster]);

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setFormState({ ...formState, [name]: value });
	}

	function handleFormSubmit(event) {
		// event.preventDefault();
		const newRoster = {
			employee_name: formState.employee_name,
			day: formState.day,
			start_time: formState.start_time,
			finish_time: formState.finish_time,
			open_status: true,
		};
		if (roster) {
			newRoster._id = roster._id;
		}

		handleSubmit(newRoster);
	}

	return (
        <Container>
			<main>
				<Card>
					<Typography variant="h6" gutterBottom>
						{buttonLabel}
						{errorMessage && <p>{errorMessage}</p>}
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
                        <InputLabel htmlFor="uncontrolled-native">Employee *</InputLabel>
							<NativeSelect
								required
								name="employee_name"
								onChange={handleChange}
								value={formState.day}
								inputProps={{
									name: 'employee_name',
									id: 'uncontrolled-native',
								}}
							>
								<option value="" disabled>
									select
								</option>
								{employee_name.map((obj, index) => (
									<option key={`${index}-${obj.employee_name}`} value={obj.employee_name}>
										{' '}
										{obj.employee_name}{' '}
									</option>
								))}
							</NativeSelect>
						</Grid>
                        <Grid item xs={12} md={6}>
							<InputLabel htmlFor="uncontrolled-native">Day *</InputLabel>
							<NativeSelect
								required
								name="day"
								onChange={handleChange}
								value={formState.day}
								inputProps={{
									name: 'day',
									id: 'uncontrolled-native',
								}}
							>
								<option value="" disabled>
									select
								</option>
								{day.map((obj, index) => (
									<option key={`${index}-${obj.day}`} value={obj.day}>
										{' '}
										{obj.day}{' '}
									</option>
								))}
							</NativeSelect>
						</Grid>
						<Grid item xs={12} md={6}>
							<InputLabel htmlFor="uncontrolled-native">Start Time *</InputLabel>
							<NativeSelect
								required
								name="start_time"
								onChange={handleChange}
								value={formState.start_time}
								inputProps={{
									name: 'start_time',
									id: 'uncontrolled-native',
								}}
							>
								<option value="" disabled>
									select
								</option>
								{start_time.map((obj, index) => (
									<option key={`${index}-${obj.start_time}`} value={obj.start_time}>
										{' '}
										{obj.start_time}{' '}
									</option>
								))}
							</NativeSelect>
						</Grid>
						<Grid item xs={12} md={6}>
							<InputLabel htmlFor="uncontrolled-native">Finish Time *</InputLabel>
							<NativeSelect
								required
								name="finish_time"
								onChange={handleChange}
								value={formState.finish_time}
								inputProps={{
									name: 'finish_time',
									id: 'uncontrolled-native',
								}}
							>
								<option value="" disabled>
									select
								</option>
								{finish_time.map((obj, index) => (
									<option key={`${index}-${obj.finish_time}`} value={obj.finish_time}>
										{' '}
										{obj.finish_time}{' '}
									</option>
								))}
							</NativeSelect>
						</Grid>

						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color="secondary" name="saveRoster" value="yes" />}
								label="Save this roster?"
							/>
						</Grid>
					</Grid>
					<Button
						roster={formState}
						data-cy="roster-new-submit"
						handleSubmit={handleFormSubmit}
					/>
				</Card>
			</main>
        </Container>
	);
};

export default Form;