import * as React from "react";
import { Box, Text, width, Center, PBox } from "rn-faiez-components";
import { ScrollView, Image, StatusBar } from "react-native";
import color from "../../utils/color";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { Feather } from "@expo/vector-icons";
import Input from "../../components/Input";


export default function HomeTabScreen({ extraData }) {
  return (
    <Box flex={1} bg={color.white}>
      <StatusBar backgroundColor={color.blue} />
      <ScrollView>
        <Center mb={5}>
          <Box bg={color.blue} p={12} mb={20} w={"100%"}>
            <Box flexDirection={'row'}>
              <Box w={'75%'}>
                <Text color={color.white} fontSize={12}>
                  Welcome back
                  <Entypo name="thunder-cloud" size={16} color={color.white} />
                </Text>
                <Text fontWeight={"bold"} color={color.white} fontSize={16}>
                  Ahmed jamal
                </Text>

              </Box>
              <Box w={'25%'} flexDirection={'row'} >
                <PBox
                  bg={"rgba(255,255,255,0.5)"}
                  rounded={20}
                  p={6}
                  w={40}
                  h={40}
                  alignItems={'center'}
                  justifyContent={'center'}
                  style={{
                    borderWidth: 1,
                    borderColor: color.white,
                  }}
                >
                  <Ionicons name="notifications-outline" size={24} color={color.white} />

                </PBox>
                <PBox
                  bg={"rgba(255,255,255,0.5)"}
                  rounded={20}

                  ml={4}
                  w={40}
                  h={40}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Image

                    source={{ uri: 'https://randomuser.me/api/portraits/men/81.jpg' }}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20
                    }}
                  />

                </PBox>
              </Box>
            </Box>
            <Center bg={color.blue}>
              <Box
                bg={"rgba(255,255,255,0.5)"}
                flexDirection={"row"}
                w={"90%"}
                p={8}
                m={10}
                mt={20}
                rounded={8}
                style={{
                  borderWidth: 1,
                  borderColor: color.white,
                }}
              >
                <Box p={6} >
                  <Feather name="search" size={24} color="white" />

                </Box>
                <Input
                  ml={18}
                  placeholder={"Search your Courses"}
                  hintColor={color.white}
                  color={color.white}
                />
              </Box>
            </Center>

          </Box>
        </Center>

        <Box p={6} ml={8}>
          <Text fontSize={22} fontWeight={"bold"} ml={8} color={color.blue}>
            Courses
          </Text>
        </Box>
        <Box
          flexDirection={"row"}
          style={{ flexWrap: "wrap" }}
          justifyContent={"center"}
        >
          {[1, 2, 3, 4].map((i) => (
            <Course
              navigation={extraData}
              title={i % 2 === 0 ? "ENGLISH" : "MATH"}
              icon={getIcons(i % 2 === 0 ? "ENGLISH" : "MATH")}
            />
          ))}
        </Box>
        <Box p={6} ml={8} flexDirection={"row"}>
          <Text fontSize={22} fontWeight={"bold"} ml={8} color={color.blue}>
            Assignments Today
          </Text>
          <Box
            bg={"red"}
            alignItems={"center"}
            rounded={8}
            ml={6}
            p={6}
            h={"100%"}
          >
            <Text color={color.white}>6</Text>
          </Box>
        </Box>
        <Assignment />
        <Assignment />
        <Assignment />
        <Assignment />
        <Assignment />
        <Assignment />
      </ScrollView>
    </Box>
  );
}

const Course = ({ navigation, icon, title }) => {
  return (
    <PBox
      onPress={() => navigation.navigate("CourseView")}
      justifyContent={"center"}
      alignItems={"center"}
      rounded={6}
      p={6}
      w={width(40)}
      h={120}
      m={4}
      ml={8}
      bg={color.white}
      e={4}
    >
      <Image source={icon} style={{ width: 50, height: 50 }} />
      <Text mt={4} mb={4} fontWeight={"bold"}>
        {title ? title : "English"}
      </Text>
    </PBox>
  );
};

const Assignment = ({ navigation }) => {
  return (
    <Box p={6} e={2} m={8} bg={color.white} rounded={3} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} >
      <FontAwesome5 name="book-open" size={24} color={color.dark} />
      <Box ml={10} w={'90%'} >
        <Box flexDirection={"row"}>
          <Text color={color.blue} fontSize={12} fontWeight={"bold"}>
            English
          </Text>
        </Box>
        <Box flexDirection={"row"}>
          <Text color={color.dark} fontSize={18} fontWeight={"bold"}>
            Noun
          </Text>
        </Box>
        <Box flexDirection={"row"}>
          <Box flexDirection={"row"} w={"60%"}>
            <Text color={color.dark}>Title : </Text>
            <Text color={color.gray} fontWeight={"bold"}>
              Bla bla bla
            </Text>
          </Box>
          <Box flexDirection={"row"}>
            <Text color={color.gray} fontWeight={"bold"}>
              26/02/24 12:00PM
            </Text>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

const getIcons = (icon) => {
  switch (icon) {
    case "ENGLISH":
      return require("../../../assets/eng.png");
      break;
    case "MATH":
      return require("../../../assets/math-book.png");
      break;

    default:
      return require("../../../assets/eng.png");
  }
};