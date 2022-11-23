import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";
import "../App.scss";

export default function LogInBar() {
  let navigate = useNavigate();
  const {store, dispatch} = useGlobalState();
  const {loggedInUser} = store ;

  function handleLogout(event) {
    event.preventDefault();
    logoutUser().then(() => {
        dispatch({type: "setLoggedInUser", data: null});
        dispatch({type: "setToken", data: null});
        navigate("/thankyou")
    })
  }

  return (
    <Box display="flex" justifyContent="space-around" width="100%">
      {loggedInUser ? (
        <>
          <Typography m={2}><h4 name="loggedin" ></h4>Hi {loggedInUser}</Typography>
          <Button variant="contained" onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <Button className="sign-in-button" variant="contained" data-testid="loginbutton" onClick={() => navigate("/login")}>Login</Button>
          <Button className="logout-button" variant="contained" onClick={() => navigate("/register")}>Register</Button>
        </>
      )}
    </Box>
  );
}