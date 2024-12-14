import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchUserById } from '../services/api';

const UserDetailScreen = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const response = await fetchUserById(userId);
      setUser(response.data);
    };
    loadUser();
  }, [userId]);

  if (!user) return null;

  return (
    <View>
      <Text>Nome: {user.nome}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

export default UserDetailScreen;
