import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Constant from 'expo-constants';

import Home from './screens/Home';
import videoPlayer from './screens/VideoPlayer';
import Explore from './screens/Explore';
import Subscribe from './screens/Subscribe';
import SearchScreen from './screens/Search';

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () =>{
  return(
    <Tabs.Navigator>
      <Tabs.Screen name='home' component={Home} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='subscribe' component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator headerMode='none'>
       <Stack.Screen name='rootHome' component={RootHome} />
       <Stack.Screen name='search' component={SearchScreen} />
       <Stack.Screen name='videoPlayer' component={videoPlayer} />
     </Stack.Navigator>

   </NavigationContainer>
  );
}

