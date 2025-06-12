<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from './api/axiosConfig';

export default function DailyGoalsScreen() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Cria uma chave única para cada dia para guardar as metas no dispositivo
  const getTodayKey = () => {
    const today = new Date();
    return `@daily-tasks-${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  };

  const fetchDailyGoals = async () => {
    const todayKey = getTodayKey();
    try {
      const savedGoals = await AsyncStorage.getItem(todayKey);
      if (savedGoals) {
        setGoals(JSON.parse(savedGoals));
      } else {
        // Se não há metas para hoje, busca novas na API
        const response = await axios.get('/dailytasks/random'); // <-- Chama a nova rota
        const newGoals = response.data.map(goal => ({ ...goal, completed: false }));
        await AsyncStorage.setItem(todayKey, JSON.stringify(newGoals));
        setGoals(newGoals);
      }
    } catch (error) {
      console.error("Erro ao buscar metas diárias:", error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível carregar as metas de hoje.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyGoals();
  }, []);

  const toggleGoal = async (id) => {
    const updatedGoals = goals.map(goal =>
      goal._id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
    // Salva o progresso no armazenamento do dispositivo
    await AsyncStorage.setItem(getTodayKey(), JSON.stringify(updatedGoals));
  };

  const completedCount = goals.filter(g => g.completed).length;
  const completionPercentage = goals.length > 0 ? (completedCount / goals.length) * 100 : 0;

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#42A5F5" />
        <Text style={{color: '#fff', marginTop: 10}}>A buscar as suas metas do dia...</Text>
      </View>
    );
  }
=======
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DailyGoalsScreen() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'LER 10 PÁGINAS DO LIVRO', completed: true },
    { id: 2, title: 'CAMINHAR 2 KM', completed: true },
    { id: 3, title: 'CUIDADOS PESSOAIS', completed: false },
    { id: 4, title: 'ACADEMIA', completed: false },
  ]);
  

  const toggleGoal = (id) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };
  const router = useRouter();
  const completedCount = goals.filter(g => g.completed).length;
  const completionPercentage = (completedCount / goals.length) * 100;
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
<<<<<<< HEAD
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/Home')}>
          <MaterialIcons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>SUAS TAREFAS DIÁRIAS</Text>
      </View>

      <FlatList
        data={goals}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.goalList}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <TouchableOpacity style={styles.goalButton} onPress={() => toggleGoal(item._id)}>
              <Text style={styles.goalText}>{item.title.toUpperCase()}</Text>
            </TouchableOpacity>
            <View style={[styles.statusCircle, item.completed ? styles.completed : styles.pending]} />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Não foi possível carregar as metas de hoje. Verifique a sua conexão ou tente mais tarde.</Text>}
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {completionPercentage.toFixed(0)}% DOS OBJETIVOS ALCANÇADOS!
        </Text>
=======
      
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons  onPress={() => router.push('/Home')} name="arrow-back" size={24} color="black" />
        <Text style={styles.headerText}>META SIMPLES - 4 ATIVIDADES DIÁRIAS</Text>
      </View>

      {/* Goal list */}
      <View style={styles.goalList}>
        {goals.map(goal => (
          <View key={goal.id} style={styles.goalItem}>
            <TouchableOpacity
              style={styles.goalButton}
              onPress={() => toggleGoal(goal.id)}
            >
              <Text style={styles.goalText}>{goal.title}</Text>
            </TouchableOpacity>
            <View style={[styles.statusCircle, goal.completed ? styles.completed : styles.pending]} />
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {completionPercentage}% DOS OBJETIVOS ALCANÇADOS!
        </Text>
        <Text style={styles.footerSubtext}>2 HORAS OFFLINE</Text>
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
<<<<<<< HEAD
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
=======
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  header: {
    backgroundColor: '#42A5F5',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
<<<<<<< HEAD
    paddingTop: 40,
=======
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    gap: 10,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  goalList: {
    padding: 16,
<<<<<<< HEAD
    flexGrow: 1,
=======
    flex: 1,
    justifyContent: 'center',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    gap: 16,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalButton: {
    backgroundColor: '#7E57C2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    flex: 1,
  },
  goalText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusCircle: {
    width: 24,
    height: 24,
<<<<<<< HEAD
    marginLeft: 12,
=======
    marginLeft: 8,
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  completed: {
    backgroundColor: 'green',
  },
  pending: {
    backgroundColor: '#fff',
  },
  footer: {
    backgroundColor: '#F8D7FF',
    paddingVertical: 16,
    alignItems: 'center',
  },
  footerText: {
    fontWeight: 'bold',
    color: '#000',
  },
<<<<<<< HEAD
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
  }
=======
  footerSubtext: {
    marginTop: 4,
    fontWeight: '600',
    color: '#000',
  },
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
});
