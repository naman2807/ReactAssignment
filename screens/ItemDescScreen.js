import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import ItemDescView from "../components/ItemDescView";
import { ITEMS } from "../data/dummy-data";
import { CartContext } from "../store/cart-context";

function ItemDescScreen({ route, navigation }) {
  const cartContext = useContext(CartContext);

  const id = route.params.itemId;
  const item = ITEMS.find((item) => item.id === id);

  const isItemInCart = cartContext.ids.includes(id);

  function handleClickListener() {
    if (isItemInCart) {
      cartContext.removeFromCart(id);
    } else {
      cartContext.addToCart(id);
    }
  }

  useEffect(() => {
    navigation.setOptions({
      title: item.title,
    });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            onClick={handleClickListener}
            buttonText={isItemInCart ? "Remove From Cart" : "Add To Cart"}
            buttonColor="red"
            textColor="white"
          />
        );
      },
    });
  }, [navigation, handleClickListener]);

  return (
    <View style={styles.container}>
      <ItemDescView {...item} />
    </View>
  );
}

export default ItemDescScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
