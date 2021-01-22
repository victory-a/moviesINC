import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from './MovieDetail';
import Playing from './Playing';
import Header from '../../components/Header';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
    initialRouteName="Now Playing"
    mode="card"
    headerMode="screen"
    screenOptions={{
      header: props => <Header {...props} />
    }}
    
    >
      <Stack.Screen name="Playing" component={Playing} />
      <Stack.Screen name="Movie Detail" component={MovieDetail} />
    </Stack.Navigator>
  );
}
