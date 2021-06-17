import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './component/CarsList';
import img from './assets/unsplash.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      

<CarsList/>
     <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
 
