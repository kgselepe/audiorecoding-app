import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import SignUp from './components/signUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import from local files
import Welcome from './components/welcome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
  

    <NavigationContainer>
      <Stack.Navigator>
   
 <Stack.Screen name="signUp" component={SignUp} />

  <Stack.Screen name="SignIn" component={SignIn} />

  <Stack.Screen name="Home" component={Home} />
         
      </Stack.Navigator>
    </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },


});
