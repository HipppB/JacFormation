import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useAuth } from "../Context/AuthContext";
function LoginView() {
  const { login } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Ecran de connexion</Text>
      <Button title="Se connecter" onPress={() => login()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginView;
