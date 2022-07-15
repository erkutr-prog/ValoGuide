import { Navigation } from "react-native-navigation";

import App from "./App";
import AgentDetails from "./screens/AgentDetails";
import Agents from "./screens/Agents";
import Maps from "./screens/Maps";
import Weapons from "./screens/Weapons";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


Navigation.registerComponent('Agents', () => Agents);
Navigation.registerComponent('AgentDetails', () => AgentDetails);
Navigation.registerComponent('Maps', () => Maps);
Navigation.registerComponent('Weapons', () => Weapons);

const agentIcon = MaterialCommunityIcons.getImageSourceSync('chemical-weapon', 35, 'black')
const mapIcon = Ionicons.getImageSourceSync('map', 35, 'black')
const weaponIcon = Ionicons.getImageSourceSync('map', 35, 'black');



Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component:{
               name: 'Agents'
             }
           }
         ]
       },
       bottomTabs: {
         id: 'BOTTOM_TABS_LAYOUT',
         children: [
           {
             stack: {
               id: 'AGENTS_TAB',
               children: [
                 {
                   component: {
                     id: 'AGENT_SCREEN',
                     name: 'Agents'
                   }
                 }
               ],
               options: {
                 bottomTab: {
                   icon: agentIcon,
                   text: 'Agents'
                 }
               }
             }
           },
           {
             stack: {
               id: 'MAPS_TAB',
               children: [
                 {
                   component: {
                     id: 'MAP_SCREEN',
                     name: 'Maps'
                   }
                 }
               ],
               options: {
                 bottomTab: {
                   icon: mapIcon,
                   text: 'Maps'
                 }
               }
             }
           },
           {
             stack: {
               id: 'WEAPONS_TAB',
               children: [
                 {
                   component: {
                     id: 'WEAPON_SCREEN',
                     name: 'Weapons'
                   }
                 }
               ],
               options: {
                 bottomTab: {
                   icon: weaponIcon,
                   text: 'Weapons'
                 }
               }
             }
           }
         ]
       }
     },
  });
});