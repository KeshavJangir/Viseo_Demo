
import React, { useState,  useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AsyncStorage} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/screens/Home';
import LoginScreen from './src/components/screens/Login';

const Stack = createNativeStackNavigator();

export const userContext = createContext();

const App = () => {
  
   const [loginValue, setLoginValue] = useState(false)
   const [userData, setUserData] = useState({userName:'Viseo' , passWord:'123456', isLoggedIn: false})

  const getData = async (key) => {
    // get Data from Storage
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
         setLoginValue(data)
         setUserData({userName:'Viseo' , passWord:'123456', isLoggedIn: data})
        return data
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getData("isLoggedIn")
}, [])

  return (
    <userContext.Provider value={[userData, setUserData]}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
         // options={{ title: 'Login' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </userContext.Provider>
  );
};

export default App;