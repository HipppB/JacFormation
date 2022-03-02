import { StyleSheet } from "react-native";

import { AuthProvider } from "./src/Context/AuthContext";
import { CounterProvider } from "./src/Context/CounterContex";
import AuthNavigator from "./src/routes/AuthNavigator";
export default function App() {
  return (
    <CounterProvider>
      <AuthProvider>
        <AuthNavigator />
      </AuthProvider>
    </CounterProvider>
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
