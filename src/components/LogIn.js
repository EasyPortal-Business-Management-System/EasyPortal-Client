import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";
import { Button } from "@mui/material";

export default function LogIn() {
  const initialFormState = {
    email: "",
    password: "",
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

  function handleSubmit(event) {
    event.preventDefault();

    loginUser(formState)
      .then((data) => {
        let username = data.username;
        let token = data.token;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", username);

        dispatch({ type: "setLoggedInUser", data: username });
        dispatch({ type: "setToken", data: token });
        navigate("/viewrosters");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formState.username}
        onChange={handleChange}
      ></input>
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      ></input>
      <Button onClick={handleSubmit}>Login</Button>
    </div>
  );
}