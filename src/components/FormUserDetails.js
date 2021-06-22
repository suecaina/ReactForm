import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import muiThemeable from "material-ui/styles/muiThemeable";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    //destructuing using values as a variable
    const { values, handleChange } = this.props;

    return (
      //needs 1 element- React Fragment
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br></br>
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="First Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br></br>
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br></br>
          <RaisedButton
            label="Continue"
            //colour blue
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          {/* <p>your name is {this.props.values.lastName}</p> */}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
