import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import muiThemeable from "material-ui/styles/muiThemeable";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    //destructuing using values as a variable
    const { values, handleChange } = this.props;

    return (
      //needs 1 element- React Fragment
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Oppupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br></br>
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("City")}
            defaultValue={values.city}
          />
          <br></br>
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br></br>
          <RaisedButton
            label="Continue"
            //colour blue
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            //colour blue
            primary={false}
            style={styles.button}
            onClick={this.back}
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

export default FormPersonalDetails;
