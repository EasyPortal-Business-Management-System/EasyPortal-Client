import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { useNavigate, useParams } from "react-router-dom";
import { getRoster } from "../services/rosterServices";
import { useEffect, useState } from "react";
import { employees } from "../services/rosterServices";
import { getLoggedInUser } from "../services/authServices";

function EmployeeDashboard() {
  const [employee, setRoster] = useState(null);

  let navigate = useNavigate();
  const { id } = useParams();
  const {dispatch} = useGlobalState();

	useEffect(() => {
		getRoster(3)
		.then((employee) => setRoster(employee))
		.catch((error) => console.log(error))
	},[id])

  if (!employee) return null;

  return (
    <div>
      <Typography><h1>{employee.name} Roster</h1></Typography>
      <Typography><h4>Remember to check the roster weekly and contact your manager for changes</h4></Typography>
      <p>Employee: {employee.name}</p>
      <p>Monday: {employee.monday}</p>
      <p>Tuesday: {employee.tuesday}</p>
      <p>Wednesday: {employee.wednesday}</p>
      <p>Thursday: {employee.thursday}</p>
      <p>Friday: {employee.friday}</p>
      <p>Saturday: {employee.saturday}</p>
      <p>Sunday: {employee.sunday}</p>
    </div>
  );
}

export default EmployeeDashboard;