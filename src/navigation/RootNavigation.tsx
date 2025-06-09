import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";

type RootStack = {
    HomeStack: undefined,
    AuthStack: undefined,
}

const RootStack = createNativeStackNavigator<RootStack>();

const RootNavigator = () => {

    const {isAuth} = useAuth();

    return(
        <NavigationContainer>
            <RootStack.Navigator>
                {isAuth ? (
                    <RootStack.Screen name="HomeStack" component={HomeStack} />
                    ) : (
                    <RootStack.Screen name="AuthStack" component={AuthStack} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;