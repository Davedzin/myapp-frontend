import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { fetchUsers, deleteUser } from '../services/api';

const ListUsersScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  // Função para carregar os usuários
  const loadUsers = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os usuários.');
    }
  };

  // Efeito para carregar usuários ao montar o componente
  useEffect(() => {
    loadUsers();
  }, []);

  // Função para deletar usuário
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      Alert.alert('Sucesso', 'Usuário deletado com sucesso!');
      loadUsers(); // Atualizar a lista após deletar
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível deletar o usuário.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header de navegação */}
      <View style={styles.header}>
        <Button
          title="Cadastrar Usuário"
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          title="Atualizar Lista"
          onPress={loadUsers}
        />
        <Button
          title="Sair"
          color="red"
          onPress={() => Alert.alert('Logout', 'Usuário deslogado!')}
        />
      </View>

      {/* Lista de usuários */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userName}>Nome: {item.nome}</Text>
            <Text style={styles.userEmail}>Email: {item.email}</Text>
            <View style={styles.buttonGroup}>
              <Button
                title="Detalhes"
                onPress={() =>
                  navigation.navigate('UserDetail', { userId: item.id })
                }
              />
              <Button
                title="Editar"
                onPress={() =>
                  navigation.navigate('UpdateUser', {
                    userId: item.id,
                    initialData: { nome: item.nome, email: item.email },
                  })
                }
              />
              <Button
                title="Deletar"
                color="red"
                onPress={() => handleDelete(item.id)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  userContainer: {
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  userName: { fontSize: 16, fontWeight: 'bold' },
  userEmail: { fontSize: 14, color: '#555', marginBottom: 8 },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ListUsersScreen;
