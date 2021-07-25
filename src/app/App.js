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
import NewCase from '../containers/newCase';
import Database from '../containers/database';
import homeScreen from '../containers/homeScreen';
import ImageUploadScreen from '../containers/imageUploadScreen';
import {Provider} from 'react-redux';
import store from '../redux/store/configStore';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={homeScreen} />
          <Stack.Screen name="newCase" component={NewCase} />
          <Stack.Screen name="CasesDatabase" component={Database} />
          <Stack.Screen name="ImageUpload" component={ImageUploadScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </Provider>
);

export default App;
