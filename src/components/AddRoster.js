import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRoster } from "../utils/RosterContext";
import { useGlobalState } from "../config/globalState";

import Form from "./Form";

const AddRoster = ({ history }) => {
	const { dispatch } = useGlobalState();
	const [errorMessage, setErrorMessage] = useState(null);

	function handleSubmit(roster) {
		addRoster(roster)
			.then((response) => {
				if (response.error) {
					throw new Error(response.error);
				}
				dispatch({
					type: 'addRoster',
					data: response,
				});

				history.push(`/rosters/${response._id}`);
			})
			.catch((error) => {
				if (error) setErrorMessage('Missing fields please try again');
				else
					setErrorMessage(
						'There may be a problem with the server. Please try again after a few moments.'
					);
			});
	}

	return (
		<Form
			buttonLabel="Create Roster"
			handleSubmit={handleSubmit}
			errorMessage={errorMessage}
		/>
	);
};

export default AddRoster