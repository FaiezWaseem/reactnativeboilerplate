import * as React from "react";
import { View, Text, Button } from "react-native";
import type { RootStackScreenProps } from "../types/navigation";

export default function DetailScreen({
  navigation,
}: RootStackScreenProps<"DetailsScreen">) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("DetailsScreen")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
}
