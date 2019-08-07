import React from "react";
import City from "./City";

class Main extends React.PureComponent {
  render() {
    const { submitted, value } = this.props;
    if (submitted === false || value === "") {
      return (
        <div style={{ display: "inline-block" }}>
          <h3>Please enter a value then hit submit!</h3>
        </div>
      );
    }

    if (value !== "" && submitted) {
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">City</th>
              <th scope="col">Temperature</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {value.split(", ").map((item, index) => (
              <React.Fragment key={item + index.toString()}>
                <City
                  val={item}
                  num={index + 1}
                  key={item + index.toString()}
                />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default Main;
