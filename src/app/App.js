/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {createStackNavigator} from '@react-navigation/stack';
import newCase from '../containers/newCase';
import homeScreen from '../containers/homeScreen';
import {Provider} from 'react-redux';
import store from '../redux/store/configStore';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={homeScreen} />
          <Stack.Screen name="newCase" component={newCase} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </Provider>
);

export default App;
