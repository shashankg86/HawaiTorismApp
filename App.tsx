import Navigation from "./src/navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  IBMPlexMono_100Thin,
  IBMPlexMono_100Thin_Italic,
  IBMPlexMono_200ExtraLight,
  IBMPlexMono_200ExtraLight_Italic,
  IBMPlexMono_300Light,
  IBMPlexMono_300Light_Italic,
  IBMPlexMono_400Regular,
  IBMPlexMono_400Regular_Italic,
  IBMPlexMono_500Medium,
  IBMPlexMono_500Medium_Italic,
  IBMPlexMono_600SemiBold,
  IBMPlexMono_600SemiBold_Italic,
  IBMPlexMono_700Bold,
  IBMPlexMono_700Bold_Italic,
} from "@expo-google-fonts/ibm-plex-mono";
import { ActivityIndicator, View, Text } from "react-native";

const App = () => {
  let [fontsLoaded] = useFonts({
    IBMPlexMono_100Thin,
    IBMPlexMono_100Thin_Italic,
    IBMPlexMono_200ExtraLight,
    IBMPlexMono_200ExtraLight_Italic,
    IBMPlexMono_300Light,
    IBMPlexMono_300Light_Italic,
    IBMPlexMono_400Regular,
    IBMPlexMono_400Regular_Italic,
    IBMPlexMono_500Medium,
    IBMPlexMono_500Medium_Italic,
    IBMPlexMono_600SemiBold,
    IBMPlexMono_600SemiBold_Italic,
    IBMPlexMono_700Bold,
    IBMPlexMono_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="#008080" />
        <Text>Loading...</Text>
      </View>
    );
  } else
    return (
      <>
        <StatusBar style="auto" />
        <Navigation />
      </>
    );
};

export default App;
