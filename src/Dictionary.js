import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import DescriptionNoun from "./DescriptionNoun";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [description, setDescribtion] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function displayResponse(response) {
    setDescribtion(response.data);
  }
  function displayImage(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=4dad04c3ca4f2774bb04900t8b93bo1f`;
    axios.get(apiUrl).then(displayResponse);

    let pexelsApiKey =
      "kRoNAnn3DK26oAu8cRgpvKQyQz2j5lNo9FOka82ADCuxCPR6GEG2WpDz";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(displayImage);
  }

  function displayWord(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordSearch(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="formTitle">Explain following word</h2>
          <form onSubmit={displayWord}>
            <input
              className="searchbox"
              type="search"
              autoFocus={true}
              onChange={handleKeywordSearch}
              defaultValue={props.defaultKeyword}
            ></input>
          </form>
          <div className="hint">looking for: beach, isle, ocean, wood</div>
        </section>
        <DescriptionNoun results={description} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading....";
  }
}
