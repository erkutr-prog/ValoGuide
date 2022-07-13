import { Navigation } from "react-native-navigation";

import App from "./App";
import AgentDetails from "./screens/AgentDetails";


Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('AgentDetails', () => AgentDetails);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.myApp.WelcomeScreen'
             }
           }
         ]
       }
     }
  });
});