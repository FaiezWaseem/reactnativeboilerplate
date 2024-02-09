import * as React from "react";
import { Box, Text, Center, Button } from "rn-faiez-components";
import color from "../../utils/color";
import Input from "../../components/Input";
export default function LoginScreen({ navigation }) {
  return (
    <Center flex={1} bg={color.white}>
      <Box p={6} w={"80%"} mb={20}>
        <Text fontSize={28} fontWeight={"bold"} ml={8} color={color.blue}>
          Login to Continue
        </Text>
      </Box>
      <Box p={6} w={"80%"} mt={10}>
        <Text mb={8} color={color.gray}>
          Email{" "}
        </Text>
        <Input
          placeholder={"Enter Email"}
          rounded={3}
          style={{
            padding: 8,
            borderWidth: 1,
            borderColor: color.blue,
            background: "#eee",
          }}
        />
      </Box>
      <Box p={6} w={"80%"} mt={10}>
        <Text mb={8} color={color.gray}>
          Password{" "}
        </Text>
        <Input
          placeholder={"Enter Password"}
          rounded={3}
          style={{
            padding: 8,
            borderWidth: 1,
            borderColor: color.blue,
          }}
        />
      </Box>
      <Center p={6} w={"80%"} mt={10}>
        <Button
          style={{
            backgroundColor: color.blue,
            padding: 8,
            borderRadius: 4,
            width: "60%",
          }}
          txtStyle={{
            textAlign: "center",
          }}
          color={"white"}
          onPress={() => navigation.navigate("Home")}
        >
          Login
        </Button>
      </Center>
    </Center>
  );
}
