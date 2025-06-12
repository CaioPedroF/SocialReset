<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from './api/axiosConfig';

export default function RelatorioUso() {
  const [user, setUser] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;

  const fetchDataForScreen = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        router.replace('/');
        return;
      }
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const [profileResponse, usageResponse] = await Promise.all([
        axios.get('/users/profile', config),
        axios.get('/usage/weekly', config)
      ]);

      setUser(profileResponse.data);

      const usageData = usageResponse.data;
      
      // --- PONTO DE DEPURAÇÃO ADICIONADO ---
      // Isto vai mostrar-nos exatamente o que a API devolveu para o gráfico.
      console.log("[DADOS DO GRÁFICO RECEBIDOS]: ", usageData);

      if (usageData && usageData.length > 0) {
        const labels = usageData.map(item => item.appName);
        const data = usageData.map(item => item.hours);
        setChartData({
          labels: labels,
          datasets: [{ data: data }],
        });
      }

    } catch (error) {
      console.error("Erro ao buscar dados para a tela de relatório:", error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível carregar os dados do relatório.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataForScreen();
  }, []);

=======
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { useRouter } from 'expo-router';

export default function RelatorioUso() {
  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth * 0.9;  // 90% da tela
  const router = useRouter()

  const data = {
    labels: ['Instagram', 'TikTok', 'YouTube', 'Facebook'],
    datasets: [
      {
        data: [3, 16, 2, 5],
      },
    ],
  };

>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  const chartConfig = {
    backgroundGradientFrom: '#2e2e2e',
    backgroundGradientTo: '#2e2e2e',
    color: (opacity = 1) => `rgba(139, 77, 255, ${opacity})`,
    labelColor: () => '#fff',
    barPercentage: 0.5,
<<<<<<< HEAD
    propsForLabels: {
        fontSize: 10,
    },
  };
  
  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#8b4dff" />
        <Text style={{ color: '#fff', marginTop: 10 }}>A carregar relatório...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/Home')}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.avatar}>
          <Ionicons name="person" size={48} color="#000" />
        </View>
        <TouchableOpacity onPress={() => router.push('/TelaConfiguracoes')}>
            <Ionicons name="settings" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.username}>{user ? user.username : 'Utilizador'}</Text>
      
      <Text style={styles.alertText}>
        ⓘ O seu uso de redes sociais esta semana:
      </Text>

      {chartData.labels.length > 0 ? (
        <BarChart
          data={chartData}
          width={screenWidth * 0.9}
          height={250}
          chartConfig={chartConfig}
          style={styles.chart}
          fromZero
          showValuesOnTopOfBars
          verticalLabelRotation={25}
        />
      ) : (
        <Text style={styles.emptyText}>Não há dados de uso para exibir.</Text>
      )}
=======
    decimalPlaces: 0,
    propsForLabels: {
      fontSize: screenWidth < 350 ? 8 : 10,  // fonte menor em telas pequenas
    },
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons onPress={() => router.push('/Home')} name="arrow-back" size={24} color="#fff" />
        <View style={styles.avatar}>
          <Ionicons name="person" size={48} color="#000" />
        </View>
        <Ionicons onPress={() => router.push('/TelaConfiguracoes')} name="settings" size={24} color="#fff" />
      </View>

      <Text style={styles.username}>Nome do usuário</Text>
      <Text style={styles.alertText}>ⓘ Você passou cerca de 26h nas redes!</Text>

      {/* Gráfico */}
      <BarChart
        data={data}
        width={chartWidth}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
        fromZero
        showValuesOnTopOfBars={true}
        verticalLabelRotation={screenWidth < 350 ? 30 : 0}
      />

      <TouchableOpacity style={styles.tag}>
        <Text style={styles.tagText}>▢ Últimos 7 dias</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={styles.footerText}>Tela inicial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="target" size={24} color="#fff" />
          <Text style={styles.footerText}>Metas</Text>
        </TouchableOpacity>
      </View>
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
<<<<<<< HEAD
  centered: {
    justifyContent: 'center',
  },
=======
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#fff',
  },
  username: {
    color: '#fff',
<<<<<<< HEAD
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  alertText: {
    color: '#ccc',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  chart: {
    marginVertical: 10,
    borderRadius: 16,
  },
  emptyText: {
    color: '#aaa',
    marginTop: 50,
  }
=======
    fontSize: 14,
    marginTop: 10,
  },
  alertText: {
    color: 'red',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16,
  },
  tag: {
    backgroundColor: '#8b4dff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 20,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
});
