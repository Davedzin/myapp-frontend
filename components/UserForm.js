import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UserForm = ({ onSubmit, initialData = {} }) => {
  const [nome, setNome] = useState(initialData.nome || '');
  const [email, setEmail] = useState(initialData.email || '');
  const [senha, setSenha] = useState(initialData.senha || '');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Salvar" onPress={() => onSubmit({ nome, email, senha })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default UserForm;
