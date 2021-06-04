import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "10ch",
    },
  },
}));

function SugarCalc() {
  const [sl, setSl] = useState("");
  const [asl, setAsl] = useState("");
  const [sbp, setSbp] = useState("");
  const [dbp, setDbp] = useState("");
  const [sbpCond, setsBpCond] = useState("");
  const [dbpCond, setDBpCond] = useState("");

  const [scondition, setSCondition] = useState("");

  useEffect(() => {
    // console.log(sl);
    analyseSugar();
    analyseSBp();
    analyDeSBp();
  });
  const analyseSugar = () => {
    if (sl <= 0) {
      setSCondition("");
    } else if (sl <= 50) {
      setSCondition("Dangerously low: Seek medical attention");
    } else if (sl <= 70 || sl <= 90) {
      setSCondition(
        "Possibly too low: Consume sugar upon experiencing symptoms of low blood sugar, or seek medical attention"
      );
    } else if (sl <= 160 || sl < 240) {
      setSCondition("Too high: Work to bring down blood sugar levels");
    } else if (sl <= 240 || sl <= 300) {
      setSCondition(
        "Much too high: This could be a sign of ineffective glucose management, so see a doctor"
      );
    } else if (sl >= 300) {
      setSCondition("Very high: Seek immediate medical attention");
    }
  };

  const analyseSBp = () => {
    if (sbp < 120) {
      setsBpCond("NORMAL");
    } else if (sbp === 120 || sbp <= 129) {
      setsBpCond("ELEVATED");
    } else if (sbp === 130 || sbp <= 139) {
      setsBpCond("HIGH BLOOD PRESSURE(HYPERTENSION) STAGE 1");
    } else if (sbp === 140 || sbp <= 179) {
      setsBpCond("HIGH BLOOD PRESSURE(HYPERTENSION) STAGE 2");
    } else if (sbp > 180) {
      setsBpCond("HYPERTENSIVE CRISIS(consult your doctor immediately)");
    }
  };

  const analyDeSBp = () => {
    if (dbp < 80) {
      setDBpCond("NORMAL");
    } else if (dbp < 80) {
      setDBpCond("ELEVATED");
    } else if (dbp === 80 || dbp <= 89) {
      setDBpCond("HIGH BLOOD PRESSURE(HYPERTENSION) STAGE 1");
    } else if (dbp === 90 || dbp <= 119) {
      setDBpCond("HIGH BLOOD PRESSURE(HYPERTENSION) STAGE 2");
    } else if (dbp >= 120) {
      setDBpCond("HYPERTENSIVE CRISIS(consult your doctor immediately)");
    }
  };
  return (
    <div>
      <div className="container">
        <TextField
          type="number"
          required
          id="outlined-number"
          label="Fasting blood sugar level"
          variant="outlined"
          value={sl}
          onChange={(e) => {
            setSl(e.target.value);
          }}
        />
        <div>
          <TextField
            type="number"
            required
            id="outlined-required"
            label="BP(systolic)"
            variant="outlined"
            value={sbp}
            onChange={(e) => {
              setSbp(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end"> mm Hg</InputAdornment>
              ),
            }}
          />
          <TextField
            type="number"
            required
            id="outlined-required"
            label="BP(diastotic)"
            variant="outlined"
            value={dbp}
            onChange={(e) => {
              setDbp(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end"> mm Hg</InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      {/* <h2>{sbp}</h2> */}
      <h2>SUGAR {scondition}</h2>
      <h1>SYSTOLIC BP {sbpCond}</h1>
      <h1>DIASTOLIC BP {dbpCond}</h1>
    </div>
  );
}

export default SugarCalc;
