import { Image, StyleSheet, Text, View } from "react-native";
import { Constants } from "../util/constants";
import Button from "./Button";

function BottomCartView({ cartCount, navigation }) {
  function navigateToCart() {
    navigation.navigate(Constants.CART_ITEMS_SCREEN);
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require("../assets/cart.jpg")}
      />
      <View>
        <Text style={styles.text}>{cartCount} items added to cart</Text>
      </View>

      <Button
        onClick={navigateToCart}
        buttonText="View Cart"
        buttonColor="white"
        textColor="red"
      />
    </View>
  );
}

export default BottomCartView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  imageContainer: {
    width: 50,
    height: 50,
  },

  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});
