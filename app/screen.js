import { Navigation } from "react-native-navigation";
import LoginScreen from "./containers/login-screen";

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    "LoginScreen",
    () => LoginScreen,
    store,
    Provider
  );
}
