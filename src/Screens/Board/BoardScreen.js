import * as React from "react";
import { Box, Text, Center, Button, height } from "rn-faiez-components";
import color from "../../utils/color";
import { Image, ImageBackground } from "react-native";
import Screens from "../../utils/Screens";

const bgImage = require('../../../assets/blank_bg2.png');


export default function BoardScreen({ navigation }) {
    const boards = ['Federal Board', 'Sindh Board','Punjab Board','Aga Khan Board'];
    return (
        <ImageBackground source={bgImage} style={{
            flex: 1,
            justifyContent: 'center', alignItems: 'center',
            backgroundColor: color.white,
            resizeMode: 'stretch'
        }}>
            <Text color={color.white}  fontSize={36} fontWeight={'bold'}  mb={20}>Select Board</Text>
            <Center w={'100%'}>
                {boards.map(board =>{
                    return <Button
                    style={{
                        backgroundColor: color.blue,
                        padding: 10,
                        borderRadius: 20,
                        width: "60%",
                        marginBottom : 10
                    }}
                    txtStyle={{
                        textAlign: "center",
                        fontWeight: 'bold',
                        fontSize: 18
                    }}
                    color={"white"}
                    onPress={() => navigation.navigate(Screens.CLASSES)}
                    
                >
                    {board}
                </Button>
                })}
                
           
            </Center>

        </ImageBackground>
    );
}
