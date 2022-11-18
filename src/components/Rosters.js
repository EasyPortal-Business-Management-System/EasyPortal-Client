import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { Link, useNavigate } from "react-router-dom";
import { getRosters } from "../services/rosterServices";
import { useEffect } from "react";
import { employees } from "../services/rosterServices";

function Rosters() {
  let navigate = useNavigate();
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }

getRosters()
  .then((employees) =>
    dispatch({ type: "setRosters", data: employees })
    )
    .catch((error) => console.log(error));
  }, [loggedInUser, dispatch]);

  return(
    <div>
      <Typography><h1>Employee Roster List</h1></Typography>
      <Typography><h2>Click on employee name to make changes</h2></Typography>
      {employees.map((employee, index) => {
            return (
              <Link key={employee.id} to={`/rosters/${employee.id}`}>
                <Typography>{employee.name}</Typography>
              </Link>
            );
          })}
          {/* <button onClick={() => navigate("/rosters/new")}>
            Add Roster
          </button> */}
    </div>
  )
}

export default Rosters;

