import React from "react";
import { View, Text, Image } from "react-native";

import { BatLogoStyle } from "./BatLogoStyle";
import batlogo from "../../../assets/bat-logo.png";

export function BatLogo() {
  return (
    <View>
      <Text style={BatLogoStyle.title}>BAT PASS GENERATOR</Text>
      <Image source={batlogo} style={{
        resizeMode: 'contain',
        height: 200,
      }} />
    </View>
  );
}
