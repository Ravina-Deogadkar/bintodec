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
  handleChange = () => (event) => {
    let value = event.target.value;
    console.log("jjj");
    console.log(value);
    const obj = { convertTo: value };
    this.setState(obj);
    this.props.onTypeChange(obj);
  };
  render() {
    const classes = this.props;
    return (
      <div>
        <span>Convert To </span>
        <Select
          value={this.state.convertTo}
          onChange={this.handleChange()}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"binary"}>Binary</MenuItem>
          <MenuItem value={"decimal"}>Decimal</MenuItem>
        </Select>
      </div>
    );
  }
}
export default withStyles(useStyles)(ConvertType);
