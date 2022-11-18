import { Typography, Button } from "@mui/material";
import { useGlobalState } from "../utils/stateContext";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  createRoster,
  updateRoster,
  getRoster,
} from "../services/rosterServices";

export default function NewRoster() {
  const initialFormState = {
    name: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunnday: ""
  };
  const [formState, setFormState] = useState(initialFormState);

  const { dispatch, store } = useGlobalState();
  const { employees } = store;

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getRoster(id).then((roster) => {
        const employee = employees.find(
          (employee) =>
            employee.name.toLowerCase()
        );
        setFormState({
          name: roster.name,
          monday: roster.monday,
          tuesday: roster.tuesday,
          wednesday: roster.wednesday,
          thursday: roster.thursday,
          friday: roster.friday,
          saturday: roster.saturday,
          sunnday: roster.sunday
        });
      });
    }
  }, [id, employees]);

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    if (id) {
      updateRoster({ id: id, ...formState })
        .then(() => {
          dispatch({
            type: "updateRoster",
            data: { id: id, ...formState },
          });
          navigate(`/rosters/${id}`);
        })
        .catch((error) => console.log(error));
    } else {
      createRoster({ ...formState })
        .then((roster) => {
          dispatch({ type: "addRoster", data: roster });
          navigate("/rosters");
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div>
      <Typography>Employee:</Typography>
      <input
        type="text"
        name="employee"
        // value={formState.employee}
        // onChange={handleChange}
      ></input>
      <Typography>Monday:</Typography>
      <input
        type="text"
        name="monday"
      ></input>
      <Typography>Tuesday:</Typography>
      <input
        type="text"
        name="tuesday"
      ></input>
      <Typography>Wednesday:</Typography>
      <input
        type="text"
        name="wednesday"
      ></input>
      <Typography>Thursday:</Typography>
      <input
        type="text"
        name="thursday"
      ></input>
      <Typography>Friday:</Typography>
      <input
        type="text"
        name="friday"
      ></input>
      <Typography>Saturday:</Typography>
      <input
        type="text"
        name="saturday"
      ></input>
      <Typography>Sunday:</Typography>
      <input
        type="text"
        name="sunday"
      ></input>
      <Button onClick={handleClick}>{id ? "Update" : "Create"}</Button>
    </div>
  );
}