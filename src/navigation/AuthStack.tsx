import HomeStack from "./HomeStack";
import LoginScreen from "../screens/LoginScreen";
import RecoveryScreen from "../screens/RecoveryScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
  );
};

export default AuthStack;
