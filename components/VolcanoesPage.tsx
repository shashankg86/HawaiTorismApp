import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import volcanoImage from "../assets/Rectangle_2.png";
import { styles, topSpots } from "./constant";
import TravelGuide from "./TravelGuide";
import topBar from "../assets/top_bar.png";

const VolcanoesPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={topBar} style={styles.topBar} />
      </View>
      <Image source={volcanoImage} style={styles.headerImage} />
      <Text style={styles.description}>
        Hawaii has 15 volcanoes that are part of a chain of over 129 volcanoes
        that stretches across the north Pacific.
      </Text>
      <Text style={styles.subtitle}>Top spots</Text>
      <View style={styles.spotList}>
        {topSpots.map((spot, index) => (
          <View key={index} style={styles.spotItem}>
            <Text style={styles.spotName}>{`${index + 1}. ${spot.name}`}</Text>
            <Image source={spot.image} style={styles.spotImage} />
          </View>
        ))}
      </View>
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

export default VolcanoesPage;
