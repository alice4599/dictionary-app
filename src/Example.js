import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <strong>Example:</strong>
        <br />
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
