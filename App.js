import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottomCartView from "./components/BottomCartView";
import ItemScreen from "./screens/ItemsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDescScreen from "./screens/ItemDescScreen";
import Button from "./components/Button";
import CartContextProvider from "./store/cart-context";
import CartScreen from "./screens/CartScreen";
import { Constants } from "./util/constants";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CartContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#ffb3b3" },
            }}
          >
            <Stack.Screen
              name={Constants.HOME_PAGE}
              component={ItemScreen}
              options={{
                title: "Items List",
              }}
            />
            <Stack.Screen name={Constants.ITEM_DESC_SCREEN} component={ItemDescScreen} />
            <Stack.Screen name={Constants.CART_ITEMS_SCREEN} component={CartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
