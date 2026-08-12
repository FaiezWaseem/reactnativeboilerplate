import "react-native-gesture-handler";

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import color from "./src/utils/color";
import Route from "./Route";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={color.blue} />
      <Route />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
