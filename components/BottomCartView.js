import { Image, StyleSheet, Text, View } from "react-native";

function BottomCartView() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../assets/icon.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Dummy Text</Text>
      </View>
    </View>
  );
}

export default BottomCartView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "red",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  imageContainer: {
    width: 50,
    height: 50,
    marginRight: 50,
  },

  textContainer: {
    marginTop: 10,
  },

  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});
