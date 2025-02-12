import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  eventName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  date: {
    fontSize: 12,
    color: "green",
  },
  price: {
    fontSize: 12,
    color: "#888",
  },
  tagsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  tag: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 5,
  },
  tagText: {
    fontSize: 10,
    color: "#555",
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  location: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  iconSpacing: {
    marginRight: 10,
  },
});