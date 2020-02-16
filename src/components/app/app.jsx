import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


const App = (props) => {
  const {errorsCount, onGameStart} = props;
  return (
    <WelcomeScreen errorsCount={errorsCount} onGameStart={onGameStart} />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  onGameStart: PropTypes.func.isRequired
};

export default App;
