import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 265,
    height: 150,
    marginBottom: 40,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    color: "#fff",
    fontSize: 16,
    paddingVertical: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#fff",
  },
  checkboxLabel: {
    color: "#fff",
    fontSize: 14,
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonGradient: {
    width: 200,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  linkTextBold: {
    fontWeight: "bold",
  },
});

export default styles;