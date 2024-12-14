import React from 'react';
import { Alert } from 'react-native';
import UserForm from '../components/UserForm';
import { updateUser } from '../services/api';

const UpdateUserScreen = ({ route, navigation }) => {
  const { userId, initialData } = route.params;

  const handleUpdate = async (user) => {
    try {
      await updateUser(userId, user);
      Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
      navigation.navigate('ListUsers');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o usuário.');
    }
  };

  return <UserForm onSubmit={handleUpdate} initialData={initialData} />;
};

export default UpdateUserScreen;
