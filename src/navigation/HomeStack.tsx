import AcountDetails from "../screens/AcountDetails";
import ConfigScreen from "../screens/ConfigScreen";
import FormScreen from "../screens/FormScreen";
import HomeScreen from "../screens/HomeScreen";
import ZoneScreen from "../screens/ZoneScreen";
import { HomeStackParamList } from "../types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ZoneScreen" component={ZoneScreen} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
        <Stack.Screen name="ConfigScreen" component={ConfigScreen} />
        <Stack.Screen name="AcountDetails" component={AcountDetails} />
      </Stack.Navigator>
  );
};

export default HomeStack;
