import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.logo} source={require('../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  logo: {
    height: 128,
    width: 128,
  }
});
