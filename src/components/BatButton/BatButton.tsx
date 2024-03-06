import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

import * as Clipboard from "expo-clipboard";
import { BatButtonStyle } from "./BatButtonStyle";
import { BatTextInput } from "../BatTextImput/BatTextInput";
import generationPass from "../../services/passwordService";
import { Picker } from "@react-native-picker/picker";

export function BatButton() {
  const [pass, setPass] = useState("");
  const [sizePass, setSizePass] = useState(6);

  function handleGeneratePass() {
    let generateToken = generationPass;
    setPass(generateToken(sizePass));
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <View style={BatButtonStyle.container}>
      <BatTextInput pass={pass} />

      <View style={BatButtonStyle.batPickerConteiner}>
        <Picker
          selectedValue={sizePass}
          style={BatButtonStyle.batPicker}
          onValueChange={(itemValue) => setSizePass(itemValue)}
        >
          <Picker.Item label="6" value={6} />
          <Picker.Item label="8" value={8} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="12" value={12} />
          <Picker.Item label="14" value={14} />
          <Picker.Item label="16" value={16} />
          <Picker.Item label="18" value={18} />
          <Picker.Item label="20" value={20} />
          <Picker.Item label="22" value={22} />
        </Picker>
      </View>

      <View>
        <Pressable onPress={handleGeneratePass}>
          <Text style={BatButtonStyle.batButtonText}>Generate 🧮</Text>
        </Pressable>

        <Pressable onPress={handleCopyButton}>
          <Text style={BatButtonStyle.batButtonText}>Copy 🖨️ </Text>
        </Pressable>
      </View>
    </View>
  );
}
