import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim() === 0) {
      return;
    }
    if (+enteredAge < 1) {
    }

    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
        <label htmlFor="age">Age(years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
