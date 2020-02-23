import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';

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
      questions = {questions}
    />,
    document.querySelector(`#root`)
);
