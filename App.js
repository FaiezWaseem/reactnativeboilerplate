import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Route from './Route'
export default function App() {
  return (
    <View style={styles.container}>
     <Route />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
