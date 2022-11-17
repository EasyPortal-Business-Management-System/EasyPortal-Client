import { Typography } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { Link, useNavigate } from "react-router-dom";
import { getRosters } from "../services/rosterServices";
import { useEffect } from "react";

export default function Rosters() {
  let navigate = useNavigate();
  const { store, dispatch } = useGlobalState();
  const { rosters, loggedInUser } = store;

  useEffect(() => {
    if (!loggedInUser) {
      return;
    }

    getRosters()
      .then((rosters) =>
        dispatch({ type: "setRosters", data: rosters })
      )
      .catch((error) => console.log(error));
  }, [loggedInUser, dispatch]);

  return (
    <div>
          {loggedInUser ? (
        <>
          <Typography>Rosters</Typography>
          {rosters.map((roster, index) => {
            return (
              <Link key={roster.id} to={`/rosters/${roster.id}`}>
                <Typography>{roster.employee}</Typography>
              </Link>
            );
          })}
          <button onClick={() => navigate("/rosters/new")}>
            Add Roster
          </button>
        </>
      ) : (
        <>
          <Typography>
            Please login.
          </Typography>
        </>
      )}
    </div>
  );
};