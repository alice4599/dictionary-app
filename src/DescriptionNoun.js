import React from "react";
import Meaning from "./Meaning";
import "./DescriptionNoun.css";
import Card from "react-bootstrap/Card";
import { CardBody, CardTitle } from "react-bootstrap";

export default function DescriptionNoun(props) {
  if (props.results) {
    return (
      <div className="DescriptionNoun">
        <Card className="wordBox">
          <CardBody>
            <CardTitle>
              <h2 className="wordDisplay">{props.results.word}</h2>
            </CardTitle>
            <div className="card-text">
              <h3 className="phoneticDisplay">{props.results.phonetic}</h3>
            </div>
          </CardBody>
        </Card>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
