import { FlatList } from "react-native";
import ItemView from "../components/ItemView";
import { ITEMS } from "../data/dummy-data";

function ItemScreen({ navigation }) {
  function renderItem(item) {
    function onPressHandler() {
      navigation.navigate("ItemDescription", {
        itemId: item.item.id,
      });
    }
    return <ItemView {...item.item} onClick={onPressHandler} />;
  }
  return (
    <FlatList
      data={ITEMS}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

export default ItemScreen;
