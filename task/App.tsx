import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, View } from "react-native";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import HeaderLayout from "./src/components/Main/Header";
import Tabs from "./src/components/Main/Tabs";
import LoginScreen from "./src/components/Login/Login";

const Stack = createStackNavigator();

const MainScreen = () => (
  <View style={{ flex: 1, gap: 20 }}>
    <HeaderLayout />
    <Tabs />
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Toast />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
