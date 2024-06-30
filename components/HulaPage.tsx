import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import hulaImage from "../assets/Rectangle_1.png";
import { styles, topSpots } from "./constant";
import TravelGuide from "./TravelGuide";
import topBar from "../assets/top_bar.png";

const HulaPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={topBar} style={styles.topBar} />
      </View>
      <Image source={hulaImage} style={styles.headerImage} />
      <Text style={styles.description}>
        A sacred Hawaiian dance and music ritual that has been a part of
        Hawaiian life for hundreds of years. Hula is a sinuous Polynesian dance
        that combines hip movement and hand gestures, often accompanied by
        chants, drumming, and instruments like the ukulele.
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

export default HulaPage;
