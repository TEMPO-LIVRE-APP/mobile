import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";

const RootNavigator = () => {

    return(
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}

export default RootNavigator;