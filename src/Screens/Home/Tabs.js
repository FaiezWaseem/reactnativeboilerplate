import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

import color from '../../utils/color';

import HomeTabScreen from './HomeTab'
import ProfileTab from './ProfileTab';
import VideosTab from './VideosTab'

export default function TabBtm({ navigation }) {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: color.blue,
            inactiveTintColor: '#555',
          }}
          screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: (tabInfo) => (
                <Ionicons name={tabInfo.focused ? 'home' : 'home-outline'}  size={25}
                color={tabInfo.focused ? color.blue : '#555'} />
              ),
            }}>
            {(props) => <HomeTabScreen {...props} extraData={navigation} />}
          </Tab.Screen>
          <Tab.Screen
            name="Videos"
            options={{
              tabBarLabel: 'Videos',
              tabBarIcon: (tabInfo) => (
                <Ionicons name={tabInfo.focused ? 'videocam' : 'videocam-outline'}  size={25}
                color={tabInfo.focused ? color.blue : '#555'} />
              ),
            }}>
            {(props) => <VideosTab {...props} extraData={navigation} />}
          </Tab.Screen>
          <Tab.Screen
            name="Profile"
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: (tabInfo) => (
                <Ionicons name={tabInfo.focused ? 'person' : 'person-outline'}  size={25}
                color={tabInfo.focused ? color.blue : '#555'} />
              ),
            }}>
            {(props) => <ProfileTab {...props} extraData={navigation} />}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    );
  }