import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { useCounter } from "../Context/CounterContex";
function CounterComponent(props: any) {
  const { count, addToCount } = useCounter();

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Button title="-" onPress={() => addToCount(-1)} />
      <Text>{count}</Text>
      <Button title="+" onPress={() => addToCount(1)} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterComponent;
