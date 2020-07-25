import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Search from './screens/Search';
import SearchScreen from './screens/Search';
import Constant from 'expo-constants';


export default function App() {
  return (
    <View style={{
      flex:1,
      marginTop:Constant.statusBarHeight,
    }}>
      {/*<Home />*/}
      <SearchScreen />
    </View>
  );
}

