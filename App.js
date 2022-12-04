import * as React from 'react';
import { View, Text } from 'react-native';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './hooks/useAuth';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>  {/* higher order component */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}


