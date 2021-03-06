import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeView from "../Views/HomeView";
import ListView from "../Views/ListView";
const HomeTab = createBottomTabNavigator();

function TabNavigator(props: any) {
  return (
    <NavigationContainer>
      <HomeTab.Navigator>
        <HomeTab.Screen
          name="Home"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <HomeTab.Screen name="List" component={ListView} />
      </HomeTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default TabNavigator;
