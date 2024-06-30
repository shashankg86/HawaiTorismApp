import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const HighlightsPage = () => {
  const highlights = [
    {
      title: "Surfing",
      description:
        "Experience the thrill of surfing in the best spots in Hawaii.",
      image: require("../assets/surfing.png"),
    },
    {
      title: "Hula",
      description:
        "Learn the traditional dance and culture of the Hawaiian islands.",
      image: require("../assets/Rectangle_1.png"),
    },
    {
      title: "Volcanoes",
      description: "Explore the majestic volcanoes and natural wonders.",
      image: require("../assets/Rectangle_2.png"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Highlights</Text>
      {highlights.map((highlight, index) => (
        <View key={index} style={styles.highlightContainer}>
          <Image source={highlight.image} style={styles.highlightImage} />
          <View style={styles.textContainer}>
            <Text style={styles.highlightTitle}>{highlight.title}</Text>
            <Text style={styles.highlightDescription}>
              {highlight.description}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  highlightContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  highlightImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  highlightDescription: {
    fontSize: 14,
    color: "gray",
  },
});

export default HighlightsPage;
