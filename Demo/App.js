import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Login from './Screens/Login';
import Welcome from './Screens/Welcome';
import Logout from './Screens/Logout';

import configurestore from './store/configurestore';

const store = configurestore()

Navigation.registerComponent('Demo.Login', () => Login, store, Provider);
Navigation.registerComponent('Demo.Logout', () => Logout, store, Provider);
Navigation.registerComponent('Demo.Welcome', () => Welcome, store, Provider);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [{
//           component: {
//             name: "Demo.Login"
//           }
//         }]
//       }
//     }
//   });
// });

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Demo.Login',
    title: 'Demo',
    animated: true,
    animationType: 'fade',
    navigatorButtons: {
      leftButtons: [
        {}
      ]
    }
  }
});