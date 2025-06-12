<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList, Alert, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from './api/axiosConfig';

export default function AtividadesScreen() {
  const [interesses, setInteresses] = useState([]);
  const [newInterest, setNewInterest] = useState('');
  const router = useRouter();

  const setAuthHeader = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return true;
    }
    router.replace('/');
    return false;
  };

  const fetchInteresses = async () => {
    if (!(await setAuthHeader())) return;
    try {
      // Chama a rota correta de interesses
      const response = await axios.get('/interests');
      setInteresses(response.data);
    } catch (error) {
      console.error("Erro ao buscar interesses:", error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível carregar os seus interesses.');
    }
  };

  useEffect(() => {
    fetchInteresses();
  }, []);

  const addInterest = async () => {
    if (newInterest.trim() === '') return;
    if (!(await setAuthHeader())) return;
    try {
      const interestData = {
        title: newInterest,
        description: 'Interesse adicionado pelo utilizador',
        category: 'hobby',
        duration: 0,
      };
      // Envia para a rota correta de interesses
      const response = await axios.post('/interests', interestData);
      // A resposta do backend agora é 'interest'
      setInteresses(prev => [...prev, response.data.interest]);
      setNewInterest('');
    } catch (error) {
      console.error("Erro ao adicionar interesse:", error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível guardar o seu novo interesse.');
    }
  };

  const deleteInterest = async (interestId) => {
    Alert.alert(
      "Remover Interesse",
      "Tem a certeza de que deseja remover este interesse?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sim, Remover",
          style: 'destructive',
          onPress: async () => {
            if (!(await setAuthHeader())) return;
            try {
              // Chama a rota correta para deletar o interesse
              await axios.delete(`/interests/${interestId}`);
              setInteresses(prev => prev.filter(item => item._id !== interestId));
            } catch (error) {
              console.error("Erro ao eliminar interesse:", error.response?.data || error.message);
              Alert.alert('Erro', 'Não foi possível remover o interesse.');
            }
          },
        },
      ]
    );
  };

  const irParaHome = () => router.replace('/Home');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={interesses}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.listContentContainer}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.title}>Meus Interesses</Text>
            <Text style={styles.subtitle}>O que gosta de fazer offline?</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Ex: Jogar videogame"
                placeholderTextColor="#aaa"
                value={newInterest}
                onChangeText={setNewInterest}
              />
              <TouchableOpacity style={styles.addButton} onPress={addInterest}>
                <AntDesign name="plus" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>{item.title}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteInterest(item._id)}>
              <AntDesign name="close" size={16} color="white" />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.homeButton} onPress={irParaHome}>
            <Text style={styles.homeButtonText}>Ir para a Home</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => <Text style={styles.emptyText}>Ainda não adicionou nenhum interesse.</Text>}
      />
=======
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Atividades() {
  const [input, setInput] = useState('');
  const [atividades, setAtividades] = useState([]);
  const router = useRouter();

  const adicionarAtividade = () => {
    if (input.trim() === '') return;
    setAtividades([...atividades, input.trim()]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SocialReset</Text>

      <Text style={styles.subtitle}>Digite o que você gosta de fazer offline</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Ex: Jogar futebol"
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={adicionarAtividade} style={styles.addButton}>
          <AntDesign name="pluscircleo" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={atividades}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
          </View>
        )}
        style={{ width: '100%', marginTop: 20 }}
      />

      <TouchableOpacity style={styles.finalizarButton} onPress={() => router.push('/Home')}>
        <Text style={styles.finalizarText}>Finalizar!</Text>
      </TouchableOpacity>
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
<<<<<<< HEAD
  },
  listContentContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
=======
    padding: 20,
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  },
  title: {
    color: '#0b84f3',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
<<<<<<< HEAD
=======
    marginVertical: 20,
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
<<<<<<< HEAD
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
=======
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
<<<<<<< HEAD
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#8b4dff',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityItem: {
    backgroundColor: '#8b4dff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%', // Força o item a ter a largura total, resolvendo o problema de clique
  },
  activityText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 10,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 40,
  },
  homeButton: {
    marginTop: 40,
    backgroundColor: '#8b4dff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  homeButtonText: {
=======
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#8b4dff',
    padding: 8,
    borderRadius: 6,
  },
  tag: {
    backgroundColor: '#8b4dff',
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },
  tagText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  finalizarButton: {
    backgroundColor: '#8b4dff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
  },
  finalizarText: {
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
