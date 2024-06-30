import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import person from "../assets/person.jpg";

const TravelGuide = () => {
  return (
    <View style={styles.guideContainer}>
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.guideName}>Shashank Gupta</Text>
          <Text style={styles.guideDetails}>Guide since 2012</Text>
        </View>
        <Image source={person} style={styles.guideImage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Contact"
          buttonStyle={styles.contactButton}
          titleStyle={styles.contactButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  guideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 6,
  },
  guideImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  guideName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "IBMPlexMono_700Bold",
  },
  guideDetails: {
    color: "#000",
    textAlign: "center",
    marginLeft: -20,
    fontSize: 16,
    marginTop: 10,
    fontFamily: "IBMPlexMono_400Regular",
  },
  buttonContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#008080",
    borderRadius: 5,
    marginLeft: -175,
  },
  contactButton: {
    backgroundColor: "white",
  },
  contactButtonText: {
    color: "#008080",
    fontWeight: "600",
  },
});

export default TravelGuide;
