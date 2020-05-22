import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import ConverterType from "./ConvertType";

const useStyles = (theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    marginTop: "10px",
  },
});

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: null,
      convertTo: "binary",
    };
  }

  handleClick = () => {
    if (this.state.convertTo === "decimal") {
      const binValue = this.state.input.split("");
      let power = binValue.length - 1;
      let decimal = 0;
      for (let i = 0; i < binValue.length; i++) {
        decimal += parseInt(binValue[i]) * Math.pow(2, power);
        power -= 1;
      }
      console.log("binary" + binValue);
      console.log("decimal" + decimal);
      let curState = this.state;
      curState["output"] = decimal;
      this.setState(curState);
    } else {
      let decimal = parseInt(this.state.input);
      let binary = "";
      let binval = "";
      while (decimal > 0) {
        binval += "" + Math.round(decimal % 2);

        decimal = Math.floor(decimal / 2);
      }
      for (let i = binval.length - 1; i >= 0; i--) {
        binary += binval[i];
      }
      let output = parseInt(binary);
      console.log("output" + parseInt(binary));
      // binval = binval.rev;
      //console.log("binary" + binary);
      //console.log("decimal" + decimal);
      let curState = this.state;
      curState["output"] = output;
      this.setState(curState);

      
    }
  };

  handleChange = () => (event) => {
    let value = event.target.value;

    console.log(value);
    let binvalue = 0;
    if (value != undefined) {
      binvalue = value.split("");
    } else {
      binvalue = this.state.binValue;
    }
    if (
      binvalue[binvalue.length - 1] > 1 &&
      this.state.convertTo === "decimal"
    ) {
      alert(
        "Invalid value provided! Make sure number contains 0's and 1's only."
      );
      return false;
    }
    let curState = this.state;
    curState["input"] = value;
    console.log(curState);
    this.setState(curState);

    console.log("output" + this.state.input);
  };

  handleConvert = (obj) => {
    // setstate( {obj, ...state});
    let curState = this.state;
    let key = Object.keys(obj)[0];
    curState[key] = obj[key];
    curState["input"] = 0;
    curState["output"] = 0;
    this.setState(curState);
    console.log(this.state.convertTo);
  };

  decimal = () =>
    this.state.output !== null ? (
      <div>
        <TextField
          id="standard-error-helper-text"
          // label="Result value"
          value={this.state.output}
          disabled
        />
      </div>
    ) : (
      ""
    );

  render() {
    const classes = this.props;
    return (
      <div
        className={classes.root}
        style={{ margin: "auto", width: "300px", paddingTop: "100px" }}
      >
        <h3> Convert Binary to Decimal</h3>

        <div className={classes.selectEmpty}>
          <div>
            <ConverterType onTypeChange={(obj) => this.handleConvert(obj)} />
          </div>
          <div>
            <TextField
              id="standard-error-helper-text"
              label="Input value"
              onChange={this.handleChange()}
              value={this.state.input}
            />
          </div>
          {this.decimal()}

          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleClick()}
            style={{ marginTop: "10px" }}
          >
            Convert
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Converter);
