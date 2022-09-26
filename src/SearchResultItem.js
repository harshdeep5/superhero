import React, {useState} from "react";
import { connect } from "react-redux";
import { addSuperhero, removeSuperhero } from "./actions/index";

function SearchResultItem(props) {
  const { data } = props;
  const [added, setAdded] = useState(false);
  const addSuperhero = superhero => {
    props.addSuperhero(superhero);
    setAdded(true);
  };

  const removeSuperhero = superhero => {
    props.removeSuperhero(superhero);
    setAdded(false);
  };

  return (
    <div>
      <div className="search-result">
        <div className="left">
          <img src={data.image.url} alt="super pic" />
        </div>
        <div className="right">
          <h1>{data.name}</h1>
          <span style={{ color: "gray", marginBottom: 5 }}>
            {data.biography["full-name"]}
          </span>
          <div className="stats">
            <div>strength: {data.powerstats.strength}</div>
            <div>speed: {data.powerstats.speed}</div>
            <div>power: {data.powerstats.power}</div>
          </div>
          {added ? (
              <button
                onClick={() => removeSuperhero(data)}
                className="cardButton btn-0"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => addSuperhero(data)}
                className="cardButton btn-1"
              >
                Compare
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addSuperhero, removeSuperhero })(SearchResultItem);
