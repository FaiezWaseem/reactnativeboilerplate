import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import color from "./src/utils/color";
import Route from "./Route";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.blue} />
      <Route />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});
