import React, { useState, useMemo, useEffect } from "react";
import { debounce } from "lodash";

function SearchBar(props) {
  const { handleChange, searchText } = props;

  const debounceSearch = useMemo(
    () =>
      debounce(
        (e) => handleChange(e),
        300
      ),
    [handleChange]
  );
  useEffect(() => {
    return () => {
      debounceSearch.cancel();
    };
  });


  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Hunt superheroes here..."
        onChange={debounceSearch}
        // value={searchText}
      />
    </div>
  );
}

export default SearchBar;
