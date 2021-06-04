import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Alert } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));

export default function Form() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [transition, setTransition] = useState("");
  const [trasitionMal, setTrasitionMal] = useState("");
  const [creaby, setCreaby] = useState("");
  const [category, setCategory] = useState("");
  const [categorymal, setCategorymal] = useState("");
  const [nameError, setnameError] = useState({});
  useEffect(() => {
    console.log(name);
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formVaidation();
    if (isValid) {
      setName("");
      setTransition("");
      setTrasitionMal("");
      setCategorymal("");
      setCategory("");
      setCreaby("");
    }
  };
  const formVaidation = () => {
    const nameError = {};
    let isValid = true;

    if (
      name.trim().length < 3 ||
      transition.trim().length < 3 ||
      trasitionMal.trim().length < 3 ||
      creaby.trim().length < 3 ||
      category.trim().length < 3 ||
      categorymal.trim().length < 3
    ) {
      nameError.namelengthError = "all fields must contain 2 letters";
      isValid = false;
    } else {
      alert("added sucessfully");
    }
    setnameError(nameError);
    return isValid;
  };

  return (
    <form
      method="GET"
      action="https://www.google.com/"
      className={classes.root}
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <div>
        <TextField
          type="text"
          required
          id="outlined-required"
          label="name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div>
        <TextField
          type="text"
          required
          id="outlined-required"
          label="Transition(eng)"
          defaultValue=""
          variant="outlined"
          value={transition}
          onChange={(e) => {
            setTransition(e.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          type="text"
          required
          id="outlined-required"
          label="Transition(mal)"
          defaultValue=""
          variant="outlined"
          value={trasitionMal}
          onChange={(e) => {
            setTrasitionMal(e.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          type="text"
          required
          id="outlined-required"
          label="Category(eng)"
          defaultValue=""
          variant="outlined"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          type="text"
          required
          id="outlined-required"
          label="Category(mal)"
          defaultValue=""
          variant="outlined"
          value={categorymal}
          onChange={(e) => {
            setCategorymal(e.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          type="text"
          required
          id="outlined-required"
          label="Createdby"
          defaultValue=""
          variant="outlined"
          value={creaby}
          onChange={(e) => {
            setCreaby(e.target.value);
          }}
        />
      </div>
      {Object.keys(nameError).map((key) => {
        return <h6 style={{ color: "red" }}>{nameError[key]}</h6>;
      })}
      <div>
        <Button
          type="Submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
