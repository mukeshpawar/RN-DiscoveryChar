/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});


// import React from 'react';
// import { render } from '@testing-library/react';

// import App from './App';

// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';

// describe('With React Testing Library', () => {
//     const initialState = { output: 10 };
//     const mockStore = configureStore();
//     let store;

//     it('Shows "Hello world!"', () => {
//         store = mockStore(initialState);
//         const { getByText } = render(
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         );

//         expect(getByText('Hello World!')).not.toBeNull();
//     });
// });
