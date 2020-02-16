import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const errorsCount = 3;
const onWelcomeButtonClick = () => {
  return true;
};

it(`<App /> should render errorsCount`, () => {
  const tree = renderer
  .create(
      <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={onWelcomeButtonClick}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
