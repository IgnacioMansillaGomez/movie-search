import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  TextField,
  Button,
} from "@material-ui/core";
import makeStyles from "./headerStyles";
import { MovieIcon } from "../icons/movieIcon";

export const Header = () => {
  const [busqueda, setBusqueda] = useState("");
  const classes = makeStyles();

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const handleClearText = (event) => {};
  const handleSearchText = (event) => {};

  return (
    <Container className={classes.Container}>
      <Card className={classes.cardContainer}>
        <Grid className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenidos!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
        <TextField
          placeholder="buscar..."
          onChange={handleBusquedaChange}
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleClearText}>
            Limpiar
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={handleSearchText}
            color="primary"
            className={classes.searchButton}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
