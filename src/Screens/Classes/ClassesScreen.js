import * as React from "react";
import { Box, Text, Center, Button, height } from "rn-faiez-components";
import color from "../../utils/color";
import {  ImageBackground } from "react-native";
import Screens from "../../utils/Screens";

const bgImage = require('../../../assets/blank_bg2.png');

export default function ClassesScreen({ navigation }) {
    const boards = ['IX', 'X', 'XI', 'XII'];
    return (
        <ImageBackground source={bgImage} style={{
            flex: 1,
            justifyContent: 'center', alignItems: 'center',
            backgroundColor: color.white,
            resizeMode: 'stretch'
        }}>
            <Text color={color.white} fontSize={36} fontWeight={'bold'} mb={20}>Select Class</Text>
            <Center w={'100%'}>
                {boards.map(board => {
                    return <Button
                        style={{
                            backgroundColor: color.blue,
                            padding: 10,
                            borderRadius: 20,
                            width: "60%",
                            marginBottom: 10
                        }}
                        txtStyle={{
                            textAlign: "center",
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                        color={"white"}
                        onPress={() => navigation.navigate(Screens.HOME)}

                    >
                        {board}
                    </Button>
                })}


            </Center>

        </ImageBackground>
    );
}
