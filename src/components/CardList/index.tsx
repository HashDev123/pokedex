import { ICreatureData } from "../../types";
import { Grid } from "@mui/material";

import CreatureCard from "../Card";

import "./styles.scss";

interface Props {
  creaturesData: ICreatureData[];
  onPokemonClick: (pokemon: ICreatureData) => void;
}

const CardList = ({ creaturesData, onPokemonClick }: Props) => {
  console.log(creaturesData);
  return (
    <div className="card-list">
      <Grid container spacing={1}>
        {creaturesData.map((creature) => (
          <Grid item xs={6} sm={4} md={2} className="creature-card">
            <CreatureCard
              key={creature.name}
              creatureData={creature}
              onClick={() => onPokemonClick(creature)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardList;
