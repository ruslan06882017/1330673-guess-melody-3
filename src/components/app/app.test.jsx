import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const errorsCount = 3;

it(`<App /> should render errorsCount`, () => {
  const tree = renderer
  .create(
      <WelcomeScreen errorsCount={errorsCount} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
