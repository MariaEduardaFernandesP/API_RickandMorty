import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CharacterDetail from './components/CharacterDetail';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Characters' }} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} options={{ title: 'Character Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
