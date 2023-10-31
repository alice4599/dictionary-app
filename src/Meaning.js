import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="CardDescription">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong>
        <br />
        {props.meaning.definition}
      </p>

      <Example example={props.meaning.example} />
      <br />

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
