import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ListUsersScreen from './screens/ListUsersScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import UpdateUserScreen from './screens/UpdateUserScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
      <Stack.Screen name="ListUsers" component={ListUsersScreen} options={{ title: 'Lista de Usuários' }} />
      <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: 'Detalhes do Usuário' }} />
      <Stack.Screen name="UpdateUser" component={UpdateUserScreen} options={{ title: 'Atualizar Usuário' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
