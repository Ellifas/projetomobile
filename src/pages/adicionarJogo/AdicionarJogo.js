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
  // Estados para controlar os campos de entrada
  const [name, setname] = useState('');
  const [image, setimagem] = useState('');
  const [price, setprice] = useState('');

  // Função para adicionar um novo jogo
  const adicionarJogo = () => {
    // Cria um objeto representando o novo jogo
    const novoJogo = {
      id: Math.random().toString(),
      name,
      image,
      price,
    };

    // Chama a função passada por parâmetro para adicionar o novo jogo
    route.params.adicionarNovoJogo(novoJogo);

    // Navega de volta para a tela inicial (Home)
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <Image
        source={require('../../../assets/union.png')}
        style={styles.containerImage}
      />

      {/* Formulário para adicionar um novo jogo */}
      <View style={styles.formContainer}>
        {/* Cabeçalho do formulário */}
        <View style={styles.header}>
          <Image
            source={require('../../../assets/BGLOGO.png')}
            style={styles.logoImage}
          />
          <View style={styles.divider} />
          <Text style={styles.title}>Adicionar Jogo</Text>
        </View>

        {/* Campo de entrada para o nome do jogo */}
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

        {/* Campo de entrada para a URL da imagem do jogo */}
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

        {/* Campo de entrada para o preço do jogo */}
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

        {/* Botão para adicionar o jogo */}
        <TouchableOpacity style={styles.button} onPress={adicionarJogo}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        {/* Botão para voltar para a tela inicial */}
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

export default AdicionarJogo;
