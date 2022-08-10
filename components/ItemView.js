import { Pressable, StyleSheet, Text, View } from "react-native";

function ItemView({ title, amount, onClick }) {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: "#dccccc" }} onPress={onClick}>
        <View style={styles.innerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>Amount - Rs {amount}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ItemView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff8080",
    borderRadius: 10,
    margin: 20,
  },

  innerContainer: {
    padding: 20,
  },

  titleContainer: {
    margin: 10,
  },

  titleText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },

  amountContainer: {
    margin: 10,
  },

  amountText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
