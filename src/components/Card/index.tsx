import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import "./styles.scss";
import { ICreatureData, ICreatureDataType } from "../../types";
import { pokeTypesClassSet } from "../../utils/pokeTypesClassSet";

interface Props {
  creatureData: ICreatureData;
  onClick: () => void;
}

const CreatureCard = ({ creatureData, onClick }: Props) => {
  return (
    <Card onClick={onClick} sx={{ maxHeight: 200 }}>
      <CardMedia
        component="img"
        image={creatureData.data.sprites.other.dream_world.front_default}
        title={creatureData.data.sprites.other.dream_world.front_default}
        sx={{ height: 100, objectFit: "contain" }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>{creatureData.name}</Typography>

          <Typography className="types-wrapper">
            {creatureData.data.types.map((type: ICreatureDataType) => (
              <div className={`type ${pokeTypesClassSet[type.type.name]}`}>
                {type.type.name}
              </div>
            ))}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreatureCard;
