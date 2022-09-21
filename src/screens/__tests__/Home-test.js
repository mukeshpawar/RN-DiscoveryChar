
import React from 'react';
import Home from '../Home';


import {useSelector, useDispatch} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';

import renderer from 'react-test-renderer';

// test('given empty HOME, user can add an item to it', () => {
//   const {getByPlaceholderText, getByText, getAllByText} = render(
//     <Home />,
//   );

//   // fireEvent.press(getByText('Add Item'));

// });
it('renders correctly Home Screen', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});