import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";

import {
  deleteRoster,
  getRoster,
} from "../services/rosterServices";

export default function RosterDetails() {
  const [roster, setRoster] = useState(null);

  let navigate = useNavigate();
  const { id } = useParams();
  const {dispatch} = useGlobalState();

  function handleDelete() {
    deleteRoster(id).then(() => {
      dispatch({ type: "deleteRoster", data: id });
      navigate('/rosters');
    });
  }

	useEffect(() => {
		getRoster(id)
		.then((roster) => setRoster(roster))
		.catch((error) => console.log(error))
	},[id])

  if (!roster) return null;

  return (
    <div>
      <p>Employee: {roster.name}</p>
      <p>Day: {roster.day}</p>
      <p>Start Time: {roster.start_time}</p>
      <p>Finish Time: {roster.finish_time}</p>

      <Box>
        <Button onClick={() => navigate(`/rosters/update/${id}`)}>
          Update
        </Button>
        <Button onClick={handleDelete}>Delete</Button>
      </Box>
    </div>
  );
}