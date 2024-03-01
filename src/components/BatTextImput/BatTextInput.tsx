import React from "react";
import { TextInput } from "react-native";

import { BatTextInputStyle } from "./BatTextInputStyle";

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput
      style={BatTextInputStyle.inputerFild}
      value={props.pass}
    />
  );
}
