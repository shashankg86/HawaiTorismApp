import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import surfingImage from "../assets/surfing.png";
import rectangle1Image from "../assets/Rectangle_1.png";
import rectangle2Image from "../assets/Rectangle_2.png";
import hawaiHomeImage from "../assets/hawai_home.png";
import topBar from "../assets/top_bar.png";
import TravelGuide from "./TravelGuide";
import { DEFAULT_BLUE, DEFAULT_LIGHT_BLUE } from "./constant";

const highlights = [
  {
    title: "Surfing",
    image: surfingImage,
    description: "Best Hawaiian islands for surfing.",
  },
  {
    title: "Hula",
    image: rectangle1Image,
    description: "Try it yourself.",
  },
  {
    title: "Volcanoes",
    image: rectangle2Image,
    description: "Volcanic conditions can change at any time.",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation() as any;

  const renderHighlightItem = (item: (typeof highlights)[0]) => (
    <View style={styles.highlightCard}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardText}>{item.description}</Text>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.navigate(item.title)}
      >
        <View style={styles.arrowBackground}>
          <Ionicons
            name="arrow-forward"
            size={26}
            style={styles.arrowForward}
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={topBar} style={styles.topBar} />
      </View>
      <Image source={hawaiHomeImage} style={styles.headerImage} />

      <Text style={styles.sectionTitle}>Highlights</Text>
      <FlatList
        data={highlights}
        renderItem={({ item }) => renderHighlightItem(item)}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />

      <Text style={styles.sectionTitle}>Categories</Text>
      {["Adventure", "Culinary", "Eco-tourism", "Family", "Sports"].map(
        (category) => (
          <View style={styles.categoryRow} key={category}>
            <Text style={styles.categoryText}>{category}</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
        )
      )}

      <View style={styles.travelGuideContainer}>
        <Text style={styles.sectionTitle}>Travel Guide</Text>
        <TravelGuide />

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book a trip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    width: "100%",
    height: 80,
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 23,
    fontFamily: "IBMPlexMono_700Bold",
  },
  flatListContainer: {
    paddingLeft: 10,
  },
  highlightCard: {
    width: 250,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    position: "relative",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: DEFAULT_BLUE,
    fontFamily: "IBMPlexMono_700Bold",
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
    fontFamily: "IBMPlexMono_400Regular",
  },
  arrowButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  arrowBackground: {
    backgroundColor: DEFAULT_LIGHT_BLUE,
    padding: 5,
    borderRadius: 20,
  },
  arrowForward: {
    color: "#008080",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginLeft: 20,
  },
  categoryText: {
    fontSize: 16,
    fontFamily: "IBMPlexMono_400Regular",
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
});

export default HomeScreen;
