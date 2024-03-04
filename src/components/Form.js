import React, { useState } from "react";

export default function Form(props) {
  const upcase = () => {
    console.log("button clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const locase = () => {
    console.log("button clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const dcase = (e) => {
    setText(e.target.value);
  };

  const del = (e) => {
    setText("");
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={dcase}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary bg-blue mx-3" onClick={upcase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary bg-blue mx-3" onClick={locase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary bg-blue mx-3" onClick={del}>
          Delete Text
        </button>
      </div>

      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>your text summary</h2>
        <p>
          {text.split(" ").length} worlds , {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Min of Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
