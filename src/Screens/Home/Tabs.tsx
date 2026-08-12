import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import color from "../../utils/color";
import HomeTabScreen from "./HomeTab";
import ProfileTab from "./ProfileTab";
import VideosTab from "./VideosTab";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../types/navigation";

type TabBtmProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen">;
};

const Tab = createBottomTabNavigator();

export default function TabBtm({ navigation }: TabBtmProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.blue,
        tabBarInactiveTintColor: "#555",
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? "home" : "home-outline"}
              size={25}
              color={tabInfo.focused ? color.blue : "#555"}
            />
          ),
        }}
      >
        {(props) => <HomeTabScreen {...props} extraData={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Videos"
        options={{
          tabBarLabel: "Videos",
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? "videocam" : "videocam-outline"}
              size={25}
              color={tabInfo.focused ? color.blue : "#555"}
            />
          ),
        }}
      >
        {(props) => <VideosTab {...props} extraData={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name={tabInfo.focused ? "person" : "person-outline"}
              size={25}
              color={tabInfo.focused ? color.blue : "#555"}
            />
          ),
        }}
      >
        {(props) => <ProfileTab {...props} extraData={navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
