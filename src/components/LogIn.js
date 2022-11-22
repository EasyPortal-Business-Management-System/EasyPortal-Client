import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";
import { Button } from "@mui/material";

export default function LogIn() {
  const initialFormState = {
    email: "",
    password: "",
    userMessage: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const { dispatch } = useGlobalState();
  let navigate = useNavigate();

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function setUserMessage(userMessage) {
    dispatch({
      type: "setUserMessage",
      data: userMessage,
    });
    console.log(userMessage);
  }

  function isValidEmail(email) {
    if (email != null) return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formState.email.length === 0) {
      setUserMessage("Email must be provided");
      console.log(formState.email);
    } else if (!isValidEmail(formState.email)) {
      setUserMessage("Please check the email typed in, something is wrong.");
      console.log(formState.email);
    } else if (formState.password.length === 0) {
      setUserMessage("Password must be provided.");
    } else {
    loginUser(formState)
      .then((data) => {
        let displayName = data.displayName;
        let token = data.token;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", displayName);
        dispatch({ type: "setLoggedInUser", data: displayName });
        dispatch({ type: "setAdminUser", data: displayName})
        dispatch({ type: "setToken", data: token });
        navigate("/dashboard");
      })
      .catch((error) => console.log(error));
      // when formState has error
      setUserMessage("Incorrect Log In Details");
    }
  }
  return (
    <div>
      <label>Email:</label>
      <input data-testid="userEmail"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      ></input>
      <label>Password:</label>
      <input data-testid="password"
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      ></input>
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
}