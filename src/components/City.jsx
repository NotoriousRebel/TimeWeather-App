import React, { Component } from "react";
import { createUrl, parseJson } from "../utils/getWeather";

class City extends Component {
  state = {
    resp: ["", ""],
    isLoading: true
  };

  getWeather = async val => {
    const base_url = createUrl(val);
    try {
      const api_call = await fetch(base_url);
      const response = await api_call.json();

      if (response.cod === 401) {
        const current_state = { ...this.state };
        current_state.isLoading = false;
        current_state.resp[0] = response.message;
        this.setState(current_state);
      } else {
        const resp = parseJson(response);
        const current_state = { ...this.state };
        current_state.isLoading = false;
        current_state.resp = resp;
        this.setState(current_state);
      }
    } catch (err) {
      const current_state = { ...this.state };
      current_state.resp[0] =
        "An error has occurred, unable to fetch data from server.";
      this.setState(current_state);
    }
  };

  async componentDidMount() {
    this.getWeather(this.props.val);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <tr>
          <td>Loading ...</td>
        </tr>
      );
    }
    return (
      <tr>
        <th scope="row">{this.props.num}</th>
        <td>{this.props.val}</td>
        <td>{this.state.resp[0]}</td>
        <td>{this.state.resp[1]}</td>
      </tr>
    );
  }
}

export default City;
