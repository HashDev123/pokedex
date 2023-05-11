import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import { ICreatureData } from "../../types";

import "./styles.scss";

interface Props {
  selectedPokemon: ICreatureData | null;
  closeDetails: () => void;
}

const CardDetails = ({ selectedPokemon, closeDetails }: Props) => {
  if (selectedPokemon) {
    return (
      <div className="card-details activated">
        <Card>
          <Button onClick={closeDetails}>Close X</Button>
          <CardMedia
            component="img"
            image={selectedPokemon.data.sprites.other.dream_world.front_default}
            title={selectedPokemon.data.sprites.other.dream_world.front_default}
            sx={{ height: 250, objectFit: "contain" }}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textTransform: "uppercase",
                variant: "h5",
              }}
            >
              <Typography textAlign={"center"}>
                {selectedPokemon.name} #{selectedPokemon.data.id}
              </Typography>

              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>
                        {selectedPokemon.data.types[0]?.type?.name}{" "}
                        {selectedPokemon.data.types[1]?.type?.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Attack</TableCell>
                      <TableCell>
                        {selectedPokemon.data.stats[1].base_stat}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Defense</TableCell>
                      <TableCell>
                        {selectedPokemon.data.stats[2].base_stat}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>HP</TableCell>
                      <TableCell>
                        {selectedPokemon.data.stats[0].base_stat}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>SP Attack</TableCell>
                      <TableCell>
                        {selectedPokemon.data.stats[3].base_stat}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>SP Defense</TableCell>
                      <TableCell>
                        {selectedPokemon.data.stats[4].base_stat}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Speed</TableCell>
                      <TableCell>
                        {selectedPokemon.data.stats[5].base_stat}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Weight</TableCell>
                      <TableCell>{selectedPokemon.data.weight}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Moves</TableCell>
                      <TableCell>{selectedPokemon.data.moves.length}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return <div className="card-details">Select a Pokemon to view details</div>;
  }
};

export default CardDetails;
