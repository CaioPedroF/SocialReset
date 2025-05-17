import React, { useState } from 'react';
import {
//  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Registro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const router = useRouter()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>SocialReset</Text>
      <Text style={styles.subtitle}>Efetue seu Registro!</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="E-MAIL"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        onChangeText={setConfirmarSenha}
        value={confirmarSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Número do telefone"
        keyboardType="phone-pad"
        onChangeText={setTelefone}
        value={telefone}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/Login')}>
        <Text style={styles.buttonText}>Registre-se</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 14,
    borderRadius: 24,
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
