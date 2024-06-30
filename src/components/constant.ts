import { StyleSheet } from "react-native";
import beach1 from "../assets/beach_1.png";
import beach2 from "../assets/beach_2.png";
import beach3 from "../assets/beach_3.png";
export const DEFAULT_BLUE = "#008080";
export const DEFAULT_LIGHT_BLUE = "#E6F2F2";
export const topSpots = [
  {
    name: "Maui",
    image: beach1,
  },
  {
    name: "Kauai",
    image: beach2,
  },
  {
    name: "Honolulu",
    image: beach3,
  },
];

export const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    height: 80,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 23,
  },
  travelGuideContainer: {
    marginTop: 20,
    backgroundColor: DEFAULT_LIGHT_BLUE,
  },
  bookButton: {
    backgroundColor: DEFAULT_BLUE,
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: "IBMPlexMono_400Regular",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "IBMPlexMono_700Bold",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  spotList: {
    margin: 0,
    backgroundColor: DEFAULT_LIGHT_BLUE,
    marginHorizontal: 10,
  },
  spotItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    margin: 8,
  },
  spotName: {
    fontSize: 16,
    flex: 1,
    color: DEFAULT_BLUE,
    fontFamily: "IBMPlexMono_700Bold",
  },
  spotImage: {
    width: 200,
    height: 100,
    borderRadius: 8,
  },
});
