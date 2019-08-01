import React, { Component } from "react";
import { isPostalCode, parseJson } from "../utils/getWeather";

class City extends Component {
  state = {
    resp: "",
    isLoading: true
  };

  getWeather = async val => {
    let Api_Key = "";
    let base_url = "https://api.openweathermap.org/data/2.5/weather";
    let loc = val[val.length - 1] === " " ? val.substr(0, val.length - 1) : val;
    //if value contains a space as last char, strip it
    loc = loc.includes(" ") ? loc.replace(" ", "%20") : loc;
    base_url = isPostalCode(loc) ? base_url + "?zip=" : base_url + "?q=";
    base_url += loc + "&cnt=1&APPID=" + Api_Key;
    const api_call = await fetch(base_url);
    const response = await api_call.json();
    const resp = parseJson(response);

    const s = this.state;
    s.resp = resp;
    s.isLoading = false;
    this.setState({ s });
  };

  async componentDidMount() {
    this.getWeather(this.props.val);
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
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
