import { Typography, Button } from "@mui/material";
import { useGlobalState } from "../utils/StateContext";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  createRoster,
  updateRoster,
  getRoster,
} from "../services/rosterServices";

export default function NewRoster() {
  const initialFormState = {
    category_id: 1,
    description: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  const { dispatch, store } = useGlobalState();
  const { categories } = store;

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getRoster(id).then((roster) => {
        const day = days.find(
          (day) =>
            day.name.toLowerCase() === roster.day.toLowerCase()
        );
        setFormState({
          day: day.name,
          description: prediction.description,
        });
      });
    }
  }, [id, categories]);

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
        value={formState.employee}
        onChange={handleChange}
      ></input>
      <Typography>Day:</Typography>
      <select
        name="day"
        value={formState.day}
        onChange={handleChange}
      >
        {categories.map((day) => (
          <option key={day.id} value={day.id}>
            {day.name}
          </option>
        ))}
      </select>

      <Typography>Start Time:</Typography>
      <select
        name="start_time"
        value={formState.start_time}
        onChange={handleChange}
      >
        {categories.map((start_time) => (
          <option key={start_time.id} value={start_time.id}>
            {start_time.name}
          </option>
        ))}
      </select>

      <Typography>Finish Time:</Typography>
      <select
        name="finish_time"
        value={formState.finish_time}
        onChange={handleChange}
      >
        {categories.map((finish_time) => (
          <option key={finish_time.id} value={finish_time.id}>
            {finish_time.name}
          </option>
        ))}
      </select>
      <Button onClick={handleClick}>{id ? "Update" : "Create"}</Button>
    </div>
  );
}