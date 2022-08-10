import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ onClick }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
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
