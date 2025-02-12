import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  description: {
    color: "#888",
    marginTop: 5,
  },
  logoutButton: {
    alignItems: "center",
  },
  logoutText: {
    fontSize: 12,
    color: "black",
  },
});