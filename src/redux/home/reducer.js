import initialState from "./initialState";
import { UPDATE_GRID, GAME_OVER, CHANGE_PLAYER, RESTART_GAME } from "./actions";
export default (state = initialState, action) => {
  console.log(action);
  if (action.type === UPDATE_GRID) {
    const { cellIndex } = action.payload;
    // we should change it's reference to the originl [...]
    const newGrid = [...state.grid];
    newGrid[cellIndex] = state.player;

    return {
      ...state,
      grid: newGrid
    };
  }
  if (action.type === GAME_OVER) {
    const { isTie } = action.payload;
    return {
      ...state,
      gameOver: true,
      player: isTie ? null : state.player
    };
  }
  if (action.type === CHANGE_PLAYER) {
    return {
      ...state,
      player: state.player === "X" ? "O" : "X"
    };
  }
  if (action.type === RESTART_GAME) {
    return initialState;
  }
  return state;
};
