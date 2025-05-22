import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function AnimatedOption({ icon, title, description }) {
  const scale = useSharedValue(1);
  

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  

  return (
    <Pressable
      onPressIn={() => {
        scale.value = withSpring(0.95);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      style={({ pressed }) => [
        styles.option,
        { opacity: pressed ? 0.7 : 1 }
      ]}
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
    const router = useRouter()
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={60} color="#fff" />
        <Text style={styles.username}>Nome do usuário</Text>
      </View>

      {/* Opções */}
      <AnimatedOption icon="lock" title="Conta" description="Aqui você altera as configurações de sua conta." />
      <AnimatedOption icon="lock" title="Privacidade" description="Aqui você controla o que compartilha conosco." onPress={() => router.push('/TelaConfiguracoesPrivacidade')}  />
      <AnimatedOption icon="lock" title="Notificações" description="Aqui você controla as notificações que você recebe." />
      <AnimatedOption icon="lock" title="Desconectar" description="Desconecte a sua conta do aplicativo." />

      {/* Footer */}
      <Pressable style={styles.footer}>
        <Ionicons name="home-outline" size={24} color="#fff" />
        <Text style={styles.footerText}>Tela inicial</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  optionText: {
    marginLeft: 10,
    flex: 1,
  },
  optionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  optionDesc: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    paddingVertical: 12,
  },
  footerText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },
});
