<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
<<<<<<< HEAD
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from './api/axiosConfig'; // Importa nossa configuração

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // 1. Novo estado para a mensagem de erro
  const router = useRouter();

  useEffect(() => {
    const verificarLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        router.replace('/Home');
      }
    };
    verificarLogin();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Por favor, preencha e-mail e senha.');
      return;
    }

    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      });

      const { token } = response.data;
      await AsyncStorage.setItem('token', token);

      const onboardingFeito = await AsyncStorage.getItem('@onboardingDone');
      router.replace(onboardingFeito === 'true' ? '/Home' : '/Tela01');

    } catch (error) {
      console.error('Erro no login:', error.response?.data || error.message);
      const message = error.response?.data?.message || 'Falha ao fazer login. Tente novamente.';
      setErrorMessage(message); // 2. Define a mensagem de erro no estado
    }
  };
=======
} from 'react-native';

export default function Index() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();
  
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>SocialReset</Text>
      <Text style={styles.welcome}>Bem - Vindo</Text>
<<<<<<< HEAD
      <Text style={styles.subtext}>Acesse sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="E-MAIL"
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => {
          setEmail(text);
          if (errorMessage) setErrorMessage(''); // Limpa o erro ao digitar
        }}
=======

      <Text style={styles.subtext}>ja tem conta?</Text>

      <TextInput
        style={styles.input}
        placeholder="E-MAIL OU USUÁRIO"
        onChangeText={setUsuario}
        value={usuario}
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
<<<<<<< HEAD
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (errorMessage) setErrorMessage(''); // Limpa o erro ao digitar
        }}
      />

      {/* 3. Exibe a mensagem de erro na tela */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
=======
        onChangeText={setSenha}
        value={senha}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/Tela01')} >
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
<<<<<<< HEAD
        <Text style={styles.footerText}>Ainda não tem conta?</Text>
        <TouchableOpacity onPress={() => router.push('/Registro')}>
          <Text style={styles.link}> Cadastre-se</Text>
=======
        <Text style={styles.footerText}>Ainda nao tem conta?</Text>
        <TouchableOpacity >
          <Text style={styles.link}onPress={() => router.push('/Registro')} > Cadastre-se</Text>
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 4,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 24,
    color: '#333',
  },
  subtext: {
    color: '#999',
    fontSize: 14,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
<<<<<<< HEAD
  // 4. Estilo para a mensagem de erro
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
=======
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  button: {
    backgroundColor: '#007BFF',
    padding: 14,
    borderRadius: 24,
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    color: '#999',
  },
  link: {
    color: '#007BFF',
    fontWeight: '600',
  },
});
