import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(5, 0, 6),
    color: "#fff",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#404040",
    color: "#fff",
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.header}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <h1>NETLIST SIMULATOR</h1>
            <p>Upload Netlist to Simulate</p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
