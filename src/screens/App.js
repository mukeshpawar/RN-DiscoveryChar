/* eslint-disable react/ */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import movieReducers from '../redux/reducers/movieReducers';

import Home from './Home';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

const allReducers = combineReducers({
  rMovie: movieReducers,
});
const myStore = createStore(allReducers);

function App() {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {backgroundColor: '#10B0C2'},
            headerTitleStyle: {color: 'black'},
            headerBackVisible: true,
          }}>
          <Stack.Screen name="Disney Character" component={Home} />
          {/* <Stack.Screen name="FlatListDemo" component={FlatListDemo} /> */}
          <Stack.Screen options={({route}) => ({title: route.params.name, headerBackTitleVisible:false })}  name="Detail Screen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
