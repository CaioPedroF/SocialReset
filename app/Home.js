import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Inicia o temporizador
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000); // atualiza a cada segundo

    return () => clearInterval(interval); // limpa o intervalo ao sair
  }, []);

  // Converte segundos em dias, horas, minutos e segundos
  const days = Math.floor(elapsedSeconds / 86400);
  const hours = Math.floor((elapsedSeconds % 86400) / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#fff" />
        <Text style={styles.headerText}>Home</Text>
        <Ionicons name="person-circle-outline" size={28} color="#fff" />
      </View>

      {/* Temporizador */}
      <View style={styles.timerRow}>
        <View style={styles.timerBlock}>
          <Text style={styles.timerNumber}>{String(days).padStart(2, '0')}</Text>
          <Text style={styles.timerLabel}>dias</Text>
        </View>
        <View style={styles.timerBlock}>
          <Text style={styles.timerNumber}>{String(hours).padStart(2, '0')}</Text>
          <Text style={styles.timerLabel}>Horas</Text>
        </View>
        <View style={styles.timerBlock}>
          <Text style={styles.timerNumber}>{String(minutes).padStart(2, '0')}</Text>
          <Text style={styles.timerLabel}>Minutos</Text>
        </View>
        <View style={styles.timerBlock}>
          <Text style={styles.timerNumber}>{String(seconds).padStart(2, '0')}</Text>
          <Text style={styles.timerLabel}>Segundos</Text>
        </View>
      </View>

      {/* Botões centrais */}
      <View style={styles.actionRow}>
        <FontAwesome name="calendar" size={28} color="#00b4fc" />
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>{hours + minutes / 60} horas sem utilizar redes sociais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionRow}>
        <Ionicons name="heart" size={28} color="#00b4fc" />
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Mais tempo sobrando!</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={styles.footerText}>Tela inicial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.centerButton}>
          <Ionicons name="add" size={36} color="#000" />
          <Text style={styles.footerTextCenter}>Começar!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="target" size={24} color="#fff" />
          <Text style={styles.footerText}>Metas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  timerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  timerBlock: {
    alignItems: 'center',
  },
  timerNumber: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  timerLabel: {
    fontSize: 14,
    color: '#fff',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  actionButton: {
    backgroundColor: '#8b4dff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginLeft: 12,
    borderRadius: 8,
    flex: 1,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 'auto',
    marginBottom: 20,
  },
  footerButton: {
    alignItems: 'center',
  },
  centerButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    marginBottom: 4,
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  footerTextCenter: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
});
