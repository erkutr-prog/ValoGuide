import {Navigation} from 'react-native-navigation';

import App from './App';
import AgentDetails from './screens/AgentDetails';
import Agents from './screens/Agents';
import Maps from './screens/Maps';
import Weapons from './screens/Weapons';
import MapDetails from './screens/MapDetails';
import WeaponDetails from './screens/WeaponDetails';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

var colors = require('./src/colors.js');

Navigation.registerComponent('Agents', () => Agents);
Navigation.registerComponent('AgentDetails', () => AgentDetails);
Navigation.registerComponent('Maps', () => Maps);
Navigation.registerComponent('MapDetails', () => MapDetails);
Navigation.registerComponent('Weapons', () => Weapons);
Navigation.registerComponent('WeaponDetails', () => WeaponDetails);

const agentIcon = MaterialCommunityIcons.getImageSourceSync(
  'account-box',
  35,
  'black',
);
const agentIconOutline = MaterialCommunityIcons.getImageSourceSync(
  'account-box-outline',
  35,
  'black',
);

const mapIcon = Ionicons.getImageSourceSync('map', 35, 'black');
const mapIconOutline = Ionicons.getImageSourceSync('map-outline', 35, 'black');

const weaponIcon = MaterialCommunityIcons.getImageSourceSync(
  'shield-sword',
  35,
  'black',
);
const weaponIconOutline = MaterialCommunityIcons.getImageSourceSync(
  'shield-sword-outline',
  35,
  'black',
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Agents',
            },
          },
        ],
      },
      bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        options: {
          bottomTabs: {
            tabsAttachMode: 'onSwitchToTab',
          },
        },
        children: [
          {
            stack: {
              id: 'AGENTS_TAB',
              children: [
                {
                  component: {
                    id: 'AGENT_SCREEN',
                    name: 'Agents',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: agentIconOutline,
                  text: 'Agents',
                  selectedIcon: agentIcon,
                },
              },
            },
          },
          {
            stack: {
              id: 'MAPS_TAB',
              children: [
                {
                  component: {
                    id: 'MAP_SCREEN',
                    name: 'Maps',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: mapIconOutline,
                  text: 'Maps',
                  selectedIcon: mapIcon,
                },
              },
            },
          },
          {
            stack: {
              id: 'WEAPONS_TAB',
              children: [
                {
                  component: {
                    id: 'WEAPON_SCREEN',
                    name: 'Weapons',
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: weaponIconOutline,
                  text: 'Weapons',
                  selectedIcon: weaponIcon,
                },
              },
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color: colors.PAGE_BACKGROUND,
    },
  },
  bottomTabs: {
    backgroundColor: colors.PAGE_BACKGROUND,
  },
});
