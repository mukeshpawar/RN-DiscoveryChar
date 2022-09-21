import 'react-native';
import React from 'react';
import DetailScreen from '../DetailScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly DetailScreen', ({route, props}) => {

  const tree = renderer.create(<DetailScreen />).toJSON();
  expect(tree).toMatchSnapshot();

  

});
