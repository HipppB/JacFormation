import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

function TextInputComponent({ value, onChangeText }: any) {
  return (
    <TextInput
      style={{
        width: 200,
        height: 20,
        backgroundColor: "red",
        marginBottom: 20,
      }}
      value={value}
      onChangeText={onChangeText()}
    />
  );
}

const styles = StyleSheet.create({});

export default TextInputComponent;