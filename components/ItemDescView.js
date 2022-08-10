import { StyleSheet, Text, View } from "react-native";

function ItemDescView({ title, amount, description }) {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.amountText}>Amount - Rs {amount}</Text>
      <Text style={styles.descText}>{description}</Text>
    </View>
  );
}

export default ItemDescView;

const styles = StyleSheet.create({
  titleText: {
    margin: 20,
    fontSize: 30,
    color: "#ff8080",
    fontWeight: "bold",
  },

  amountText: {
    margin: 20,
    fontSize: 20,
    color: "#ff8080",
  },

  descText: {
    margin: 20,
    fontSize: 20,
    color: "#ff8080",
  },
});
