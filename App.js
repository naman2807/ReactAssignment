import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottomCartView from "./components/BottomCartView";
import ItemScreen from "./screens/ItemsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDescScreen from "./screens/ItemDescScreen";
import Button from "./components/Button";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#ffb3b3" },
          }}
        >
          <Stack.Screen
            name="ItemScreen"
            component={ItemScreen}
            options={{
              title: "Items List",
            }}
          />
          <Stack.Screen
            name="ItemDescription"
            component={ItemDescScreen}
          />
        </Stack.Navigator>
        {/* <View style={styles.itemScreenContainer}>
        <ItemScreen />
      </View>
      <View style={styles.bottomContainer}>
        <BottomCartView />
      </View> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

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
