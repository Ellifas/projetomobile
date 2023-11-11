import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { styles } from './adicionarJogoStyle';

const AdicionarJogo = ({ navigation, route }) => {
  const [name, setname] = useState('');
  const [image, setimagem] = useState('');
  const [price, setprice] = useState('');

  const adicionarJogo = () => {
    const novoJogo = {
      id: Math.random().toString(),
      name,
      image,
      price,
    };
    route.params.adicionarNovoJogo(novoJogo);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/union.png')}
        style={styles.containerImage}
      />

      <View style={styles.formContainer}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/BGLOGO.png')}
            style={styles.logoImage}
          />
          <View style={styles.divider} />
          <Text style={styles.title}>Adicionar Jogo</Text>
        </View>
        <TextInput
          style={[
            styles.input,
            { borderColor: '#991F36', borderWidth: 2, color: '#DDE3F0' },
          ]}
          placeholder="Nome do jogo"
          value={name}
          onChangeText={setname}
          placeholderTextColor="#DDE3F0" // Alterado para a cor branca
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: '#991F36', borderWidth: 2, color: '#DDE3F0' },
          ]}
          placeholder="URL da imagem"
          value={image}
          onChangeText={setimagem}
          placeholderTextColor="#DDE3F0" // Alterado para a cor branca
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: '#991F36', borderWidth: 2, color: '#DDE3F0' },
          ]}
          placeholder="Preço"
          value={price}
          onChangeText={setprice}
          placeholderTextColor="#DDE3F0" // Alterado para a cor branca
        />
        <TouchableOpacity style={styles.button} onPress={adicionarJogo}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  containerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    width: 2,
    height: 50,
    backgroundColor: '#991F36',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    color: '#DDE3F0',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#DDE3F0',
    borderWidth: 2,
  },
  button: {
    backgroundColor: '#991F36',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#DDE3F0',
    fontSize: 16,
  },
  backButton: {
    color: '#DDE3F0',
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#991F36',
    fontSize: 18,
  },
}); */

export default AdicionarJogo;
