import { connect } from "react-redux";
import Home from "../components/home";
import { restartGame } from "../redux/home/actions";

const mapStateToProps = state => {
  return {
    player: state.player,
    gameOver: state.gameOver
  };
};
const mapDispatchToProps = dispatch => {
  return {
    restartGame: () => {
      dispatch(restartGame());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
