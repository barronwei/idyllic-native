import { createBottomTabNavigator } from 'react-navigation'
import Con from './Con'
import Dun from './Dun'
import Add from './Add'
import { Iconize } from '../../services/visual'

export default createBottomTabNavigator(
  {
    Settings: {
      screen: Con,
      navigationOptions: {
        tabBarIcon: Iconize('contact', 25)
      }
    },
    Schedule: {
      screen: Dun,
      navigationOptions: {
        tabBarIcon: Iconize('list', 25)
      }
    },
    Addition: {
      screen: Add,
      navigationOptions: {
        tabBarIcon: Iconize('add-circle-outline', 25)
      }
    }
  },
  {
    initialRouteName: 'Schedule',
    backBehavior: 'none',
    tabBarOptions: {
      showLabel: false
    }
  }
)
