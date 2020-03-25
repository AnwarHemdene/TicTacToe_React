import React from "react";
import "./home.css";
import Grid from "../../containers/grid";
import Alert from "../alert";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <h1>TicTacToe</h1>
      <h2>Player {props.player} </h2>
      {props.gameOver ? (
        <Alert player={props.player} restartGame={props.restartGame} />
      ) : (
        <Grid />
      )}
    </div>
  );
}
