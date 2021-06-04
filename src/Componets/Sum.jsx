import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

function Sum() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [sum, setsum] = useState(0);

  useEffect(() => {
    setsum(Number(num1) + Number(num2));
  });

  function numDifferentiation(value) {
    var val = Math.abs(value);
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      val = (val / 100000).toFixed(2) + " Lac";
    }
    return val;
  }
  return (
    <div className="container">
      <TextField
        type="number"
        required
        id="outlined-required"
        label="number1"
        variant="outlined"
        value={num1}
        onChange={(e) => {
          setnum1(e.target.value);
        }}
      />
      <TextField
        type="number"
        required
        id="outlined-required"
        label="number2"
        variant="outlined"
        value={num2}
        onChange={(e) => {
          setnum2(e.target.value);
        }}
      />

      <h2>sum is {numDifferentiation(sum)}</h2>
    </div>
  );
}

export default Sum;
