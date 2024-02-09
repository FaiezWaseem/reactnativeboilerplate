import * as React from "react";
import { Box, Text, Center, Button, height } from "rn-faiez-components";
import color from "../../utils/color";
import { Image,  ImageBackground } from "react-native";

const bgImage = require('../../../assets/background2.png');
const logo = require('../../../assets/logo.png');

import Screens from "../../utils/Screens";

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground source={bgImage} style={{ flex : 1 ,
    
     backgroundColor : color.white,
      resizeMode: 'stretch' }}>
      <Center mt={height(5)}>
        <Image source={logo}
          style={{ width: 200, height: 200 }} alt="Logo" />
      </Center>
      <Center p={6} w={"100%"} mt={10} position={'absolute'} bottom={height('10%')} >
        <Button
          style={{
            backgroundColor: color.blue,
            padding: 8,
            borderRadius: 8,
            width: "70%",
          }}
          txtStyle={{
            textAlign: "center",
            fontWeight: 'bold',
            fontSize: 18
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
