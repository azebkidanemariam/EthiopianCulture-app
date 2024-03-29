import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MoodPicker } from "../components/emoji";
import { theme } from "../sdha/themes";
import { useNavigation } from "@react-navigation/core";

const imageUrl =
  "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80";
const Home: React.FC = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
      <View style={[StyleSheet.absoluteFill, { justifyContent: "center" }]}>
        <MoodPicker />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#004D4D",
  },
});
