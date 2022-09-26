import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResults(props) {
  const { superheroData = [] } = props;
  return (
    <div>
      {superheroData.map((superhero, i) => (
        <SearchResultItem key={i} data={superhero} />
      ))}
    </div>
  );
}

export default SearchResults;
