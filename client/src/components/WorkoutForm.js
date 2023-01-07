import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { WORKOUT } from "../utils/queries";

function WorkoutForm() {
  const [formState, setFormState] = useState({
    user: "",
    createdAt: "",
    workoutName: "",
    workoutType: "",
    calsBurned: "",
    time: "",
    notes: "",
  });
  const [workout] = useMutation(WORKOUT, {
    variables: {
      user: formState.user,
      createdAt: formState.createdAt,
      workoutName: formState.workoutName,
      calsBurned: formState.calsBurned,
      time: formState.time,
      notes: formState.notes,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    workout();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Workout</h2>
        <div className="form-group">
          <label htmlFor="user">User:</label>
          <input type="text" name="user" id="user" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="createdAt">Date Completed:</label>
          <input
            type="date"
            name="createdAt"
            id="createdAt"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="workoutName">Name your workout:</label>
          <input
            type="string"
            name="workoutName"
            id="workoutName"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="workoutType">Type of workout:</label>
          <input
            type="string"
            name="workoutType"
            id="workoutType"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="calsBurned">Calories Burned:</label>
          <input
            type="Number"
            name="calsBurned"
            id="calsBurned"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Length of Workout:</label>
          <input type="string" name="time" id="time" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <input
            type="string"
            name="notes"
            id="notes"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="WORKOUT" />
      </div>
    </form>
  );
}

export default WorkoutForm;
