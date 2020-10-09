import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOption = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#bdc3c7", "#2c3e50"],
    sub: "",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#ffd452", "#544a7d"],
    sub: "",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#A7BFE8", "#6190E8"],
    sub: "",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#2980b9", "#2c3e50"],
    sub: "",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#eef2f3", "#8e9eab"],
    sub: "",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#1CB5E0", "#000046"],
    sub: "",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#928DAB", "#1F1C2C"],
    sub: "",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#E2E2E2", "#C9D6FF"],
    sub: "",
  },
  Atmosphere: {
    iconName: "weather-tornado",
    gradient: ["#EFEFBB", "#D4D3DD"],
    sub: "",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOption[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.sub}>{weatherOption[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontWeight: "300",
    fontSize: 80,
    color: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "300",
    color: "white",
    marginBottom: 8,
  },
  sub: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
