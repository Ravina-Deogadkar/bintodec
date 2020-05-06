import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ConverterType from "./ConvertType";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
    },
  },
}));

export default function Converter() {
  const classes = useStyles();
  const [state, setstate] = useState({ binary: 0, decimal: null });

  const handleClick = () => {
    const binValue = state.binary.split("");
    let power = binValue.length - 1;
    let decimal = 0;
    for (let i = 0; i < binValue.length; i++) {
      decimal += parseInt(binValue[i]) * Math.pow(2, power);
      power -= 1;
    }
    setstate({ binary: state.binary, decimal: decimal });
    console.log("binary" + binValue);
    console.log("decimal" + decimal);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    console.log(value);
    let binvalue = 0;
    if (value != undefined) {
      binvalue = value.split("");
    } else {
      binvalue = this.state.binValue;
    }
    if (binvalue[binvalue.length - 1] > 1) {
      alert(
        "Invalid value provided! Make sure number contains 0's and 1's only."
      );
      return false;
    }

    setstate({ binary: value, decimal: state.decimal });
  };

  const decimal = () =>
    state.decimal !== null ? (
      <div>
        <TextField
          id="standard-error-helper-text"
          // label="Result value"
          value={state.decimal}
          disabled
        />
      </div>
    ) : (
      ""
    );
  return (
    <div className={classes.root}>
      <h3> Convert Binary to Decimal</h3>

      <div className={classes.root}>
        <div>
          <ConverterType />
        </div>
        <div>
          <TextField
            id="standard-error-helper-text"
            label="Input value"
            onChange={handleChange}
            value={state.binary}
          />
        </div>
        {decimal()}

        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick()}
        >
          Convert
        </Button>
      </div>
    </div>
  );
}
