import React from "react";
import { StyleSheet, View, Button } from "react-native";

import CounterComponent from "../Components/CounterComponent";
function HomeView(props: any) {
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
      <Button
        title={"Aller a la vue liste"}
        onPress={() => props.navigation.navigate("List")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeView;
