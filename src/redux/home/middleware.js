import { CHECK_WIN, gameOver, changePlayer } from "./actions";

const middleware = store => next => action => {
  console.log("dispatching", action);
  if (action.type === CHECK_WIN) {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const state = store.getState();
    let isWin = false;
    for (let i = 0; i < 8; i++) {
      const win = wins[i];
      const a = state.grid[win[0]];
      const b = state.grid[win[1]];
      const c = state.grid[win[2]];

      if (a !== "" && a === b && b === c) {
        isWin = true;
        break;
      }
    }

    const isFull = state.grid.filter(value => !value).length === 0;

    if (isWin || isFull) {
      store.dispatch(gameOver(!isWin));
    } else {
      store.dispatch(changePlayer());
    }

    // this.setState({
    //   player: this.state.player === "X" ? "O" : "X"
    // });
  }
  // console.log(store.getState());

  next(action);
};

export default middleware;
