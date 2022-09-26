import React, { useState, useCallback } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Table from "./table";

function App() {
  const [searchText, setSearchText] = useState("");
  const [superheroData, setSuperheroData] = useState([]);

  const searchSuperHeroes = useCallback(async () => {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/5506606032753386/search/${searchText}`
    );
    const data = await response.json();

    setSuperheroData(data.results);
  }, [searchText]);

  const handleChange = useCallback(
    (e) => {
      const searchTerm = e.target.value;

      setSearchText(searchTerm);
      if (searchText.length === 0) {
        setSuperheroData([]);
      }
      if (searchTerm.length > 1) {
        searchSuperHeroes();
      }
    },
    [searchSuperHeroes, searchText.length]
  );

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
        <Table />
      </div>
    </div>
  );
}

export default App;
