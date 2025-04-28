import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@src/screens/HomeScreen";
import NewNoteScreen from "@src/screens/NewNoteScreen";
import SettingsScreen from "@src/screens/SettingsScreen";
import SummaryScreen from "@src/screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons"; // Or react-native-vector-icons/Ionicons

export type RootStackParamList = {
  MainTabs: undefined;
  NewNote: undefined;
  Settings: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Summary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        // headerStyle: {
        //   backgroundColor: "#32054D",
        //   borderBottomStartRadius: 20,
        //   borderBottomEndRadius: 20,
        // },
        headerTitleAlign: "left",
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "home";

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Summary") {
            iconName = "list-outline";
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#EBEBF0',
                  borderBottomStartRadius: 20,
                  borderBottomEndRadius: 20,
                },
                // headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}/>
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={({ route }) => ({
      headerShown: route.name === "NewNote" || route.name === "Settings",
      headerTitleAlign: "left",
    })}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="NewNote" component={NewNoteScreen} options={{ title: 'New Note' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
