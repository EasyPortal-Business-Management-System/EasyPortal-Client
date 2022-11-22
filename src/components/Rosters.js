import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { Link, useNavigate } from "react-router-dom";
import { getRosters } from "../services/rosterServices";
import { useEffect } from "react";


function Rosters() {
  let navigate = useNavigate();

  const { store, dispatch } = useGlobalState();
  const { loggedInUser, employees } = store;

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }
    
    getRosters()
    .then((employees) =>
      dispatch({ type: "setEmployees", data: employees})
    )
    .catch((error) => console.log(error));
  }, [loggedInUser, dispatch]);

  return(
    <div>
      {loggedInUser ? (
        <>
      <Typography><h1>Employee Roster List</h1></Typography>
      <Typography><h2>Click on employee name to make changes</h2></Typography>
      {employees.map((employee, index) => {
            return (
              <Link key={employee._id} to={`/rosters/${employee._id}`}>
                <Typography>{employees._id}</Typography>
              </Link>
            );
          })}
          <button onClick={() => navigate("/rosters/new")}>
            Add Roster
          </button>
          </>
      ):(
        <>
        <Typography><h1>
          Please log in.
        </h1>
        </Typography>
        </>
      )}
    </div>
  )
}

export default Rosters;

