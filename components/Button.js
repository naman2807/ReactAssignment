import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ onClick, buttonText, buttonColor, textColor }) {
  return (
    <View style={[styles.container, {backgroundColor: buttonColor}]}>
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={[styles.buttonText, {color: textColor}]}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  buttonText: {
    color: "white",
  },
});
