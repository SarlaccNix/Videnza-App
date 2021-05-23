import React, {Component} from 'react';
import {Layout, Button, Text} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class homeScreen extends Component {
  render() {
    const handleNavigation = screen => {
      const {navigation} = this.props;
      navigation.navigate('newCase');
    };
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">Videnza App</Text>
        <Button onPress={() => handleNavigation()}>Agregar Caso</Button>
        <Button>Base de Datos de Casos</Button>
      </Layout>
    );
  }
}

export default homeScreen;
