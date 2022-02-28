import { StyleSheet } from "react-native";

import { AuthProvider } from "./src/Context/AuthContext";

import AuthNavigator from "./src/routes/AuthNavigator";
export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
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
