import { useState, useEffect } from "react";

import { getCreatureTypesList, getCreaturesDataList } from "./api";
import { ICreatureData, ICreatureDataType, ICreatureType } from "./types";
import { Button } from "@mui/material";

import CardDetails from "./components/CardDetails";
import CardList from "./components/CardList";

import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState<ICreatureData[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<ICreatureType[]>([]);
  const [typeFilter, setTypeFilter] = useState<string>("off");
  const [backupList, setBackupList] = useState<ICreatureData[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<ICreatureData | null>(
    null
  );
  const [offset, setOffset] = useState(0);

  const handlePokemonClick = (pokemon: ICreatureData) => {
    setSelectedPokemon(pokemon);
  };

  const handleFilterByType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(event.target.value);
  };

  const handleLoadMore = (): void => {
    setOffset(offset + 12);
  };

  const closeDetails = () => {
    setSelectedPokemon(null);
  };

  useEffect(() => {
    getCreatureTypesList().then((res) => setPokemonTypes(res.results));
  }, []);

  useEffect(() => {
    if (typeFilter === "off") {
      setPokemonList(backupList);
    } else {
      const newList = backupList.filter((pokemon) =>
        pokemon.data.types.some(
          (type: ICreatureDataType) => type.type.name === typeFilter
        )
      );
      setPokemonList(newList);
    }
  }, [typeFilter]);

  useEffect(() => {
    getCreaturesDataList({ offset }).then((res) => {
      const newList = pokemonList.concat(res.results);
      setPokemonList(newList);
      if (backupList.length) {
        const newBackupList = backupList.concat(res.results);
        setBackupList(newBackupList);
      } else {
        setBackupList(newList);
      }
    });
  }, [offset]);

  return (
    <div className="app">
      <h1 className="app-header">Pokedex</h1>
      <div className="content-wrapper">
        <div className="list-wrapper">
          <select onChange={handleFilterByType}>
            <option value="off">Off</option>
            {pokemonTypes.map((pokemonType) => (
              <option value={pokemonType.name}>{pokemonType.name}</option>
            ))}
          </select>
          <CardList
            creaturesData={pokemonList}
            onPokemonClick={handlePokemonClick}
          />
          <Button variant="contained" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
        <CardDetails
          selectedPokemon={selectedPokemon}
          closeDetails={closeDetails}
        />
      </div>
    </div>
  );
}

export default App;
