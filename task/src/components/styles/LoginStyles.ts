import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  banner: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    height: 200,
    backgroundColor: "#ccc",
  },

  logo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },

  errorStyle: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },

  form: {
    width: "90%",
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },

  passwordContainer: {
    position: "relative",
  },

  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 15,
  },

  forgotText: {
    color: "gray",
    textAlign: "right",
    marginVertical: 5,
  },

  signInButton: {
    backgroundColor: "green",
    marginVertical: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },

  signupText: {
    alignSelf: "flex-end",
    marginTop: 10,
  },

  signupLink: {
    color: "blue",
    textDecorationLine: "underline"
  },

  OrText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#A0A0A0",
  },

  text: {
    color: "#585858",
    fontSize: 14,
    paddingHorizontal: 10,
  },

  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginVertical: 30,
  },

  socialIcon: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },

  guestText: {
    alignSelf: "flex-end",
    color: "gray",
  },
});
