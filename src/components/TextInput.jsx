import React from "react";

const TextInput = props => {
  return (
    <div className="container">
      <input
        type="text"
        className="input-group-lg"
        style={{
          height: "100px",
          width: "600px",
          fontSize: "14pt",
          float: "right",
          border: "1px solid #000000",
          margin: "auto",
          textAlign: "center"
        }}
        {...props}
      />
    </div>
  );
};

export default TextInput;
