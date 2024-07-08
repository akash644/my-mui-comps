import React, { useState } from "react";
import "./App.css";
import MuiButton from "./components/Button";
import MuiTextField from "./components/TextField";
import Checkboxes from "./components/Checkboxes";

function App() {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    alert(
      `You entered: ${text} and checkbox is ${
        checked ? "checked" : "unchecked"
      }`
    );
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <MuiTextField
        label="Enter text"
        variant="outlined"
        onChange={handleTextChange}
        value={text}
      />
      <Checkboxes />
      <MuiButton variant="contained" color="primary" onClick={handleClick}>
        Submit
      </MuiButton>
    </div>
  );
}

export default App;
