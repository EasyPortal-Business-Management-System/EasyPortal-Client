import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";

export default function LogInBar() {
  let navigate = useNavigate();
  const {store, dispatch} = useGlobalState();
  const {loggedInUser} = store;

  function handleLogout(event) {
    event.preventDefault();
    logoutUser().then(() => {
        dispatch({type: "setLoggedInUser", data: null});
        dispatch({type: "setToken", data: null});
        navigate("/thankyou")
    })
  }

  return (
    <Box display="flex" justifyContent="space-around">
      {loggedInUser ? (
        <>
          <Typography m={2}>Hi {loggedInUser}</Typography>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button onClick={() => navigate("/register")}>Register</Button>
        </>
      )}
    </Box>
  );
}