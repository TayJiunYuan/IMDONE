
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from "./hooks/useAuth"

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { user } = useAuth();   //pass the user from useAuth

  return (
   <Stack.Navigator>
    {user ? (       //if user is logged in
        <>
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Profile" component={ProfileScreen} />
        </> //fragement..?
    ):(     
     <Stack.Screen name="Login" component={LoginScreen} />
    )}
   </Stack.Navigator>
  )
}

export default StackNavigator