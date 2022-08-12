import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BottomCartView from "../components/BottomCartView";
import ItemView from "../components/ItemView";
import { ITEMS } from "../data/dummy-data";
import { CartContext } from "../store/cart-context";

function ItemScreen({ navigation }) {
  const cartContext = useContext(CartContext);
  const cartCount = cartContext.ids.length;

  function renderItem(item) {
    function onPressHandler() {
      navigation.navigate("ItemDescription", {
        itemId: item.item.id,
      });
    }
    return <ItemView {...item.item} onClick={onPressHandler} />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemScreenContainer}>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      {cartCount > 0 ? (
        <View style={styles.bottomContainer}>
          <BottomCartView navigation={navigation} cartCount={cartCount} />
        </View>
      ) : null}
    </View>
  );
}

export default ItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemScreenContainer: {
    flex: 7,
  },

  bottomContainer: {
    height: "15%",
    width: "100%",
    flex: 1,
  },
});
