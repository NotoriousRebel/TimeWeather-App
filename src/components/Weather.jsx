import React, { Component } from "react";
import TextInput from "./TextInput";
import Main from "./Main";

class Weather extends Component {
  state = {
    formControls: {
      name: {
        value: "",
        valid: false,
        touched: false,
        submitted: false
      }
    }
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = value.length !== 0 ? true : false;
    updatedFormElement.submitted = false;

    updatedControls[name] = updatedFormElement;

    this.setState({
      formControls: updatedControls
    });
  };

  formSubmitHandler = () => {
    const formControls = { ...this.state.formControls };
    formControls.name.submitted = true;
    this.setState({ formControls });
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between text-center">
          <div className="p-1">
            <div className="row">
              <TextInput
                name="name"
                placeholder={"Please enter a city or postal code"}
                value={this.state.formControls.name.value}
                onChange={this.changeHandler}
              />

              <div className="mx-auto" style={{ width: "250px" }}>
                <button
                  onClick={this.formSubmitHandler}
                  className="btn btn-primary btn-md"
                >
                  Submit
                </button>
              </div>
            </div>
            <br />
            <Main
              submitted={this.state.formControls.name.submitted}
              value={this.state.formControls.name.value}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
