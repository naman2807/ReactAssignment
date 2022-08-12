import { useContext, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemView from "../components/ItemView";
import { ITEMS } from "../data/dummy-data";
import { CartContext } from "../store/cart-context";
import { Constants } from "../util/constants";

function CartScreen({ navigation }) {
  const cartContext = useContext(CartContext);
  const data = ITEMS.filter((item) => cartContext.ids.includes(item.id));
  const cartCount = cartContext.ids.length;

  useEffect(() => {
    navigation.setOptions({
      title: "Cart List",
    });
  }, [navigation]);

  function renderItem(item) {
    function onPressHandler() {
      navigation.navigate(Constants.ITEM_DESC_SCREEN, {
        itemId: item.item.id,
      });
    }
    return <ItemView {...item.item} onClick={onPressHandler} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemScreenContainer}>
        {cartCount > 0 ? (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        ) : (
          <Text style={styles.text}>No items present in cart</Text>
        )}
      </View>
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemScreenContainer: {
    flex: 7,
  },

  text: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
