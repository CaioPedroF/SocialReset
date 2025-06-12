<<<<<<< HEAD
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react"; // Importa o useEffect
import { Modal, Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import axios from './api/axiosConfig'; // Importa o axios

// O componente AnimatedOption continua o mesmo
function AnimatedOption({ icon, title, description, onPress }) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
=======
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function AnimatedOption({ icon, title, description, onPress }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  return (
    <Pressable
      onPressIn={() => { scale.value = withSpring(0.95); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      onPress={onPress}
<<<<<<< HEAD
      style={({ pressed }) => [styles.option, { opacity: pressed ? 0.7 : 1 }]}
=======
      style={({ pressed }) => [
        styles.option,
        { opacity: pressed ? 0.7 : 1 }
      ]}
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    >
      <Animated.View style={[animatedStyle, styles.optionContent]}>
        <MaterialIcons name={icon} size={20} color="#fff" />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>{title}</Text>
          <Text style={styles.optionDesc}>{description}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

export default function Configuracoes() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
<<<<<<< HEAD
  const [user, setUser] = useState(null); // Estado para guardar os dados do usuário
  const [loading, setLoading] = useState(true); // Estado de carregamento

  // Função para buscar os dados do usuário na API
  const fetchUserProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        router.replace('/');
        return;
      }
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get('/users/profile', config);
      setUser(response.data);
    } catch (error) {
      console.error("Erro ao buscar perfil para as configurações:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // Executa a busca ao montar a tela
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      router.replace("/");
    } catch (e) {
      console.error("Erro ao fazer logout:", e);
    }
=======

  const handleLogout = () => {
    console.log('Desconectando...');
    setModalVisible(false);
    // Aqui você pode navegar ou limpar dados.
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={60} color="#fff" />
<<<<<<< HEAD
        {/* Mostra o nome do usuário real ou um 'Carregando...' */}
        {loading ? (
          <ActivityIndicator color="#fff" style={{ marginTop: 8 }} />
        ) : (
          <Text style={styles.username}>{user ? user.username : 'Usuário'}</Text>
        )}
      </View>

      <AnimatedOption
        icon="lock"
        title="Conta"
        description="Aqui você altera as configurações de sua conta."
      />

      <AnimatedOption
        icon="lock"
        title="Privacidade"
        description="Aqui você controla o que compartilha conosco."
        onPress={() => router.push("/TelaConfiguracoesPrivacidade")}
      />

      <AnimatedOption
        icon="lock"
        title="Notificações"
        description="Aqui você controla as notificações que você recebe."
      />

      <AnimatedOption
        icon="lock"
        title="Desconectar"
        description="Desconecte a sua conta do aplicativo."
=======
        <Text style={styles.username}>Nome do usuário</Text>
      </View>

      <AnimatedOption 
        icon="lock" 
        title="Conta" 
        description="Aqui você altera as configurações de sua conta." 
      />

      <AnimatedOption 
        icon="lock" 
        title="Privacidade" 
        description="Aqui você controla o que compartilha conosco." 
        onPress={() => router.push('/TelaConfiguracoesPrivacidade')}
      />

      <AnimatedOption 
        icon="lock" 
        title="Notificações" 
        description="Aqui você controla as notificações que você recebe." 
      />

      <AnimatedOption 
        icon="lock" 
        title="Desconectar" 
        description="Desconecte a sua conta do aplicativo." 
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
        onPress={() => setModalVisible(true)}
      />

      {/* Footer */}
<<<<<<< HEAD
      <Pressable style={styles.footer} onPress={() => router.push("/Home")}>
=======
      <Pressable style={styles.footer} onPress={() => router.push('/home')}>
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
        <Ionicons name="home-outline" size={24} color="#fff" />
        <Text style={styles.footerText}>Tela inicial</Text>
      </Pressable>

      {/* Modal de confirmação */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
<<<<<<< HEAD
            <Text style={styles.modalText}>
              Deseja desconectar a sua conta?
            </Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
=======
            <Text style={styles.modalText}>Deseja desconectar a sua conta?</Text>
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
                <Text>Não</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={handleLogout}>
                <Text>Sim</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#2e2e2e",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  option: {
    backgroundColor: "#3e3e3e",
=======
    backgroundColor: '#2e2e2e',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
  option: {
    backgroundColor: '#3e3e3e',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  optionContent: {
<<<<<<< HEAD
    flexDirection: "row",
    alignItems: "flex-start",
=======
    flexDirection: 'row',
    alignItems: 'flex-start',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  },
  optionText: {
    marginLeft: 10,
    flex: 1,
  },
  optionTitle: {
<<<<<<< HEAD
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  optionDesc: {
    color: "#ccc",
=======
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  optionDesc: {
    color: '#ccc',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    fontSize: 12,
    marginTop: 4,
  },
  footer: {
<<<<<<< HEAD
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    paddingVertical: 12,
  },
  footerText: {
    color: "#fff",
=======
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    paddingVertical: 12,
  },
  footerText: {
    color: '#fff',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    marginLeft: 8,
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#7d7dfc",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#0099ff",
=======
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#7d7dfc',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0099ff',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
  },
  modalText: {
    marginBottom: 20,
    fontSize: 16,
<<<<<<< HEAD
    color: "#000",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 10,
  },
  modalButton: {
    backgroundColor: "#7d7dfc",
=======
    color: '#000',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  modalButton: {
    backgroundColor: '#7d7dfc',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
<<<<<<< HEAD
    borderColor: "#000",
=======
    borderColor: '#000',
>>>>>>> 657b9dd464a6dd8d711db06abbfe6890b49448b5
    marginHorizontal: 5,
  },
});
