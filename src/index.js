import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const Settings = {
  ERROR_COUNT: 3
};
const onWelcomeButtonClick = () => {
  return true;
};

ReactDOM.render(
    <App
      errorsCount = {Settings.ERROR_COUNT}
      onWelcomeButtonClick = {onWelcomeButtonClick}
    />,
    document.querySelector(`#root`)
);
