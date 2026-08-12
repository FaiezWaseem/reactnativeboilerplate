import "./global.css";
import "react-native-gesture-handler";

import * as React from "react";
import { View, StatusBar } from "react-native";
import color from "./src/utils/color";
import Route from "./Route";

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar backgroundColor={color.blue} barStyle="light-content" />
      <Route />
    </View>
  );
}
