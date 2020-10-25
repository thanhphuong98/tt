import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeComponent from './src/components/HomeComponent';
import TaxiComponent from './src/components/TaxiComponent';
import InfoComponent from './src/components/InfoComponent';

import ChiTietXe from './src/components/ChiTietXe';

let HomeStack = createStackNavigator({
  Home: { 
    screen: HomeComponent,
    navigationOptions: () => ({
      title: "THÔNG TIN XE KHÁCH BÌNH LIÊU",
      headerTintColor:'white',
      headerStyle:{
        backgroundColor: '#199c1f'
      },
      headerTitleStyle:{
        flex: 1, 
        textAlign: 'center',
        fontWeight:'bold',
        fontSize:18
      }
    })
   },
  ChiTietXe: { 
    screen: ChiTietXe,
    navigationOptions: () => ({
      title: "THÔNG TIN XE KHÁCH",
      headerTintColor:'white',
      headerStyle:{
        backgroundColor: '#329c37'
      },
      headerTitleStyle:{
        flex: 1, 
        textAlign: 'center',
        fontWeight:'bold',
        fontSize:18
      },
      headerLeft: null
    })
  },
},{ headerMode: 'float' });

let TaxiStack = createStackNavigator({
  Taxi: { 
    screen: TaxiComponent,
    navigationOptions: () => ({
      title: 'TAXI BÌNH LIÊU',
      headerTintColor:'white',
      headerStyle:{
        backgroundColor: '#329c37',
      },
      headerTitleStyle:{
        flex: 1, 
        textAlign: 'center',
        fontWeight:'bold',
        fontSize:18
      }
    })
   },
},{ headerMode: 'float' });

let InfoStack = createStackNavigator({
  ThongTin: { 
    screen: InfoComponent ,
    navigationOptions: () => ({
      title: 'THÔNG TIN APP',
      headerTintColor:'white',
      headerStyle:{
        backgroundColor: '#329c37',
      },
      headerTitleStyle:{
        flex: 1, 
        textAlign: 'center',
        fontWeight:'bold',
        fontSize:18
      }
    })
  },
},{ headerMode: 'float' });

let routeConfigs = {
  'Home': {
    screen: HomeStack,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Image 
        source={require('./src/icons/bus.png')} 
        style={{ width: 26, height: 26, tintColor: 'white' }} />
      )
    }
  },
  'Taxi': {
    screen: TaxiStack,
    navigationOptions:{
      tabBarLabel: 'Taxi',
      tabBarIcon: ({tintColor}) => (
        <Image 
        source={require('./src/icons/taxi.png')} 
        style={{ width: 27, height: 27, tintColor: 'white' }} />
      )
    }
  },
  'Thông tin': {
    screen: InfoStack,
    navigationOptions:{
      tabBarLabel: 'Thông tin',
      tabBarIcon: ({tintColor}) => (
        <Image 
        source={require('./src/icons/info.png')} 
        style={{ width: 26, height: 26, tintColor: 'white'}} />
      )
    }
  }
};
let tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'white',
    inactiveTintColor: '#828282',
    labelStyle: {
      fontSize: 14,
    },
    showLabel: false,
    style: {
      backgroundColor: '#329c37',
      padding: -10
    }
  },
  order: ['Home', 'Taxi', 'Thông tin'],
};

const App = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
const AppContainer = createAppContainer(App);
export default AppContainer;