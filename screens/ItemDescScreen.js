import { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import ItemDescView from "../components/ItemDescView";
import { ITEMS } from "../data/dummy-data";

function ItemDescScreen({ route, navigation }) {
  const id = route.params.itemId;
  const item = ITEMS.find((item) => item.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: item.title,
    });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button />;
      },
    });
  },[navigation]);

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
