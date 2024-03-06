import { StyleSheet } from "react-native";

export const BatButtonStyle = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    rowGap: 20,
  },
  batButtonText: {
    padding: 10,
    borderRadius: 45,
    fontSize: 20,
    color: "#e5bf3c",
    marginBottom: 10,
    fontWeight: "bold",
    letterSpacing: 0.45,
    elevation: 5,
    width:180,
    textAlign: 'center',
    backgroundColor: "#817b7b"
  },

  batPicker: {
    backgroundColor: '#817b7b',
    color: "#e5bf3c",
    width:130
  },

  batPickerConteiner: {
    borderRadius: 112,
    backgroundColor: '#817b7b',
    width: 180,
    display: 'flex',
    alignItems: 'center'

  }


});
