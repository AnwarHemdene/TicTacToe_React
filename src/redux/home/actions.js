export const UPDATE_GRID = "UPDATE_GRID";
export const CHECK_WIN = "CHECK_WIN";
export const GAME_OVER = "GAME_OVER";
export const CHANGE_PLAYER = "CHANGE_PLAYER";
export const RESTART_GAME = "RESTART_GAME";

export const updateGrid = cellIndex => ({
  type: UPDATE_GRID,
  payload: { cellIndex }
});

export const checkWin = () => ({
  type: CHECK_WIN,
  payload: {}
});

export const gameOver = isTie => ({
  type: GAME_OVER,
  payload: { isTie }
});

export const changePlayer = () => ({
  type: CHANGE_PLAYER,
  payload: {}
});

export const restartGame = () => ({
  type: RESTART_GAME,
  payload: {}
});
