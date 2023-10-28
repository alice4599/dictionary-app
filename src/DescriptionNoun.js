import React from "react";
import Meaning from "./Meaning";

import "./DescriptionNoun.css";

export default function DescriptionNoun(props) {
  if (props.results) {
    return (
      <div className="DescriptionNoun">
        <h2 className="wordDisplay">{props.results.word}</h2>
        <h3 className="phoneticDisplay">{props.results.phonetic}</h3>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
