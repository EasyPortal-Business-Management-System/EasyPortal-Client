import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import {
  getRoster,
  deleteRoster
} from "../services/rosterServices";

function RosterDetails() {
  const [employee, setRoster] = useState(null);

  let navigate = useNavigate();
  const { id } = useParams();
  // const {dispatch} = useGlobalState();

  function handleDelete() {
    deleteRoster(id).then(() => {
      dispatchEvent({ type: "deleteRoster", data: id });
      navigate(`/rosters/${id}`);
    });
  }

	useEffect(() => {
		getRoster(id)
		.then((employee) => setRoster(employee))
		.catch((error) => console.log(error))
	},[id])

  if (!employee) return null;

  return (
    <div>
      <Typography><h1>Edit employee roster below</h1></Typography>
      <Typography><h4>Click 'update' to submit changes or 'delete' to delete the roster</h4></Typography>
      <p>Employee: {employee.name}</p>
      <p>Monday: {employee.monday}</p>
      <p>Tuesday: {employee.tuesday}</p>
      <p>Wednesday: {employee.wednesday}</p>
      <p>Thursday: {employee.thursday}</p>
      <p>Friday: {employee.friday}</p>
      <p>Saturday: {employee.saturday}</p>
      <p>Sunday: {employee.sunday}</p>

      <Box>
        <Button onClick={() => navigate(`/rosters/update/${id}`)}>
          Update
        </Button>
        <Button onClick={handleDelete}>Delete User</Button>
      </Box>
    </div>
  );
}

export default RosterDetails;