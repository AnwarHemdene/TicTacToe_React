import { connect } from "react-redux";
import Grid from "../components/grid";
import { updateGrid, checkWin } from "../redux/home/actions";

const mapStateToProps = state => {
  return {
    grid: state.grid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCellClick: cellIndex => {
      dispatch(updateGrid(cellIndex));
      dispatch(checkWin());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
