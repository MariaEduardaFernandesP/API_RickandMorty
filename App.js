import 'react-native-gesture-handler'; // importa o manipulador de gestos necessario para navegacao
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // importa o container de navegacao
import { createStackNavigator } from '@react-navigation/stack'; // importa a funcao para criar um stack navigator
import HomeScreen from './HomeScreen'; // importa a tela principal (HomeScreen)
import CharacterDetail from './components/CharacterDetail'; // importa a tela de detalhes do personagem

const Stack = createStackNavigator(); // cria um stack navigator

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* define a tela inicial como HomeScreen com o titulo 'Rick & Morty' */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Rick & Morty' }} /> 
        {/* define a tela de detalhes do personagem com o titulo 'Detalhes do Personagem' */}
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} options={{ title: 'Detalhes do Personagem' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
