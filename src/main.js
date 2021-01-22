import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import navigationTheme from './styles/navigationTheme';
import Home from './screens/Home';
import Favourites from './screens/Favourites';

const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#FFA400"
        inactiveColor="#FFF"
        shifting={true}
        barStyle={{ backgroundColor: '#694fad' }}
        
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: 'home'
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarIcon: 'heart'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
