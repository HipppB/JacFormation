import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

import TextInputComponent from "../Components/TextInputComponent";
import CounterComponent from "../Components/CounterComponent";
function HomeView(props: any) {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  useEffect(() => {
    console.log(value);
  });
  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
      <TextInputComponent
        value={value}
        onChangeText={(text: string) => setValue(text)}
      />
      <TextInputComponent
        value={value2}
        onChangeText={(text: string) => setValue2(text)}
      />
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
