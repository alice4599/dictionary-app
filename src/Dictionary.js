import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import DescriptionNoun from "./DescriptionNoun";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [description, setDescribtion] = useState(null);

  function displayResponse(response) {
    console.log(response.data);
    setDescribtion(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=4dad04c3ca4f2774bb04900t8b93bo1f`;
    axios.get(apiUrl).then(displayResponse);
  }
  function handleKeywordSearch(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="searchbox"
          type="search"
          autoFocus={true}
          onChange={handleKeywordSearch}
        ></input>
      </form>
      <DescriptionNoun results={description} />
    </div>
  );
}
