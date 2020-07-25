import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, DefaultTheme, DarkTheme, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import Constant from 'expo-constants';
import Home from './screens/Home';
import videoPlayer from './screens/VideoPlayer';
import Explore from './screens/Explore';
import Subscribe from './screens/Subscribe';
//import Search from './screens/Search';
import SearchScreen from './screens/Search';
import {Provider,useSelector} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {reducer} from './reducers/reducer';
import {themeReducer} from './reducers/themeReducer';


const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
}

const rooReducer = combineReducers({
  cardData:reducer, //[],
  myDarMode:themeReducer//false
})
const store = createStore(rooReducer)

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () =>{
  const {colors} = useTheme()
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        } else if (route.name === 'subscribe'){
          iconName = 'subscriptions';
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={30} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name='home' component={Home} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='subscribe' component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default App = ()=>{
  return(
     <Provider store={store}>
      <Navigation />
    </Provider>
  )
 
}

export function Navigation() {

  let currentTheme = useSelector(state=>{
    return state.myDarMode
  })
  return (
    <Provider store={store}>
   <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}>
     <Stack.Navigator headerMode='none'>
       <Stack.Screen name='rootHome' component={RootHome} />
       <Stack.Screen name='search' component={SearchScreen} />
       <Stack.Screen name='videoPlayer' component={videoPlayer} />
     </Stack.Navigator>
   </NavigationContainer>
   </Provider>
  );
}

