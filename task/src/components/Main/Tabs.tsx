import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import SearchScreen from "./Screens/Favourites/Search/Search";
import EventList from "./Screens/EventList/EventList";
import FavouritesScreen from "./Screens/Favourites/Favourites";
import ProfileScreen from "./Screens/Profile/Profile";

const Tab = createBottomTabNavigator();

const icons: Record<string, string> = {
  Search: "search",
  Events: "calendar",
  Favourites: "heart",
  Profile: "person",
};

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName = icons[route.name] || "help-circle";
          return <Icon name={iconName as string} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Events"
        component={EventList}
        options={{ tabBarLabelStyle: { fontWeight: "bold" } }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ tabBarLabelStyle: { fontWeight: "bold" } }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
