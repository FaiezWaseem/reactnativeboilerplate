import * as React from "react";
import { Center, Button, height } from "rn-faiez-components";
import color from "../../utils/color";
import { Image, ImageBackground } from "react-native";
import Screens from "../../utils/Screens";
import type { RootStackScreenProps } from "../../types/navigation";

const bgImage = require("../../../assets/background2.png");
const logo = require("../../../assets/logo.png");

export default function SplashScreen({
  navigation,
}: RootStackScreenProps<"SplashScreen">) {
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="stretch"
      style={{
        flex: 1,
        backgroundColor: color.white,
      }}
    >
      <Center mt={height(5)}>
        <Image source={logo} style={{ width: 200, height: 200 }} />
      </Center>
      <Center
        p={6}
        w={"100%"}
        mt={10}
        position={"absolute"}
        bottom={height("10%")}
      >
        <Button
          style={{
            backgroundColor: color.blue,
            padding: 8,
            borderRadius: 8,
            width: "70%",
          }}
          txtStyle={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
          color={"white"}
          onPress={() => navigation.navigate(Screens.BOARD)}
        >
          Guest
        </Button>
      </Center>
    </ImageBackground>
  );
}
