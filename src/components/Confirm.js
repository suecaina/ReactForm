import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import List, { list, listItem, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import muiThemeable from "material-ui/styles/muiThemeable";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    //PROCESS FORM // UI FRAMEWORK
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    //destructuing using values as a variable
    const {
      //pulling out props our of values and use the variable
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      //needs 1 element- React Fragment
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />

          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
          </List>
          <br></br>
          <RaisedButton
            label="Confirm and Continue"
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

export default FormUserDetails;
