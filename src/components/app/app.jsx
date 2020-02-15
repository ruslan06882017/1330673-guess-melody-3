import React from "react";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount, onGameStart} = props;
  return (
    <WelcomeScreen errorsCount={errorsCount} onGameStart={onGameStart} />
  );
};
export default App;
