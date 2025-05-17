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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    padding: 20,
  },
  title: {
    color: '#0b84f3',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
