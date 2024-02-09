import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/Home/index";
import DetailScreen from "./src/Screens/DetailScreen";
import LoginScreen from "./src/Screens/Login/LoginScreen";
import CourseViewScreen from "./src/Screens/Courses/CourseView";
import TopicDetailScreen from './src/Screens/TopicDetail/TopicScreen'
import SplashScreen from './src/Screens/Splash/SplashScreen'
import BoardScreen from './src/Screens/Board/BoardScreen'
import ClassesScreen from './src/Screens/Classes/ClassesScreen'
import PdfViewerscreen from "./src/Screens/PdfViewer/PdfViewer";


import Screens from "./src/utils/Screens";

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Screens.SPLASH}
      >
        <Stack.Screen name={Screens.SPLASH} component={SplashScreen} />
        <Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Screens.HOME} component={HomeScreen} />
        <Stack.Screen name={Screens.COURSE} component={CourseViewScreen} />
        <Stack.Screen name={Screens.DETAILS} component={DetailScreen} />
        <Stack.Screen name={Screens.TOPIC} component={TopicDetailScreen} />
        <Stack.Screen name={Screens.BOARD} component={BoardScreen} />
        <Stack.Screen name={Screens.CLASSES} component={ClassesScreen} />
        <Stack.Screen name={Screens.PDF} component={PdfViewerscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
