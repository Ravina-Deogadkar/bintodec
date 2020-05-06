import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = (theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class ConvertType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      convertTo: "binary",
    };
  }
  handleChange= (property) => event => {
    let value = event.target.value;
    console.log("jjj");
    console.log(value);
   // this.setState(value);
  };
  render() {
    const classes = this.props;
    return (
      <Select
        value={this.state.convertTo}
        onChange={() => this.handleChange("conversion type")}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={"binary"}>Binary</MenuItem>
        <MenuItem value={"decimal"}>Decimal</MenuItem>
      </Select>
    );
  }
}
export default withStyles(useStyles)(ConvertType);
