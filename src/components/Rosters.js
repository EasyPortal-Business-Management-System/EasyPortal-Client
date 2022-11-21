import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { Link, useNavigate } from "react-router-dom";
import { getRosters } from "../services/rosterServices";
import { useEffect } from "react";

function Rosters() {
  let navigate = useNavigate();
  const { store, dispatch } = useGlobalState();
  const { adminUser } = store;

  useEffect(() => {
    if (!adminUser) {
      return;
    }

getRosters()
  .then((employees) =>
    dispatch({ type: "setRosters", data: employees })
    )
    .catch((error) => console.log(error));
  }, [adminUser, dispatch]);

  return(
    <div>
      {adminUser ? (
        <>
      <Typography><h1>Employee Roster List</h1></Typography>
      <Typography><h2>Click on employee name to make changes</h2></Typography>
      {/* {employees.map((employee, index) => {
            return (
              <Link key={employee.id} to={`/rosters/${employee.id}`}>
                <Typography>{employee.name}</Typography>
              </Link>
            );
          })} */}
          <button onClick={() => navigate("/rosters/new")}>
            Add Roster
          </button>
          </>
      ):(
        <>
        <Typography>
          Please log in.
        </Typography>
        </>
      )}
    </div>
  )
}

export default Rosters;

