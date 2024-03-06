import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Styles";
import { BatLogo } from "../../components/Logo/BatLogo";
import { BatLogoStyle } from "../../components/Logo/BatLogoStyle";
import { BatTextInput } from "../../components/BatTextImput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={BatLogoStyle.logoContainer}>
        <BatLogo />
        <View>
          <Text>"Hello"</Text>
        </View>
      </View>

      <View>
        <BatButton />
      </View>

      <StatusBar style="light" />
    </View>
  );
}
