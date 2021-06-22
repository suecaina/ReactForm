//parent component
//rce react snippet extention
import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  //user form is the state
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  //Method to proceed to next step - destructuring
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      //see switch statement - brings to formuserdetails
      step: step + 1,
    });
  };

  //Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    //switch statement
    switch (step) {
      case 1:
        return (
          //renders form user details - passed through the values
          <FormUserDetails
            nextStep={this.nextStep}
            //handle change is a prop and calling function(this.handleChange)
            handleChange={this.handleChange}
            values={values}
          />
        );

      //step +1 = case:2
      case 2:
        return (
          //renders form user details - passed through the values
          <FormPersonalDetails
            nextStep={this.nextStep}
            //handle change is a prop and calling function(this.handleChange)
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          //renders form user details - passed through the values
          <Confirm
            nextStep={this.nextStep}
            //handle change is a prop and calling function(this.handleChange)
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
