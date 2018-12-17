
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreens'
import TripsScreen from './src/screens/TripsScreen'

/*
  Instalar algumas dependências nativas:
  - react-navigator
  - react-native-gesture-handler

  depois:
  - react-native link 

*/

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen
}, {   initialRouteName: 'Trips' })

export default createAppContainer(AppNavigator)
