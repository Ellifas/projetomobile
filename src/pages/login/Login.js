import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import { styles } from './loginStyle.js';

// Componente de Login
function Login({ navigation }) {
  // Estados para armazenar o nome de usuário, senha e o foco dos campos
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  // Credenciais de usuário
  const userCredentials = [
    { username: 'Vieri', password: '123' },
    { username: 'Davi', password: '123' },
    { username: 'Eliffas', password: '123' },
  ];

  // Função para lidar com o login
  const handleLogin = () => {
    // Verifica se há um usuário válido nas credenciais
    const isValidUser = userCredentials.some(
      (user) => user.username === username && user.password === password,
    );

    // Navega para a tela Home se o usuário for válido, caso contrário, exibe um alerta
    if (isValidUser) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Usuário e/ou senha inválidos');
    }
  };

  // Função para navegar para a tela de registro
  const handleUser = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <Image
        source={require('../../../assets/union.png')}
        style={styles.containerImage}
      />

      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          {/* Logo do aplicativo */}
          <Image
            source={require('../../../assets/BGLOGO.png')}
            style={styles.logoImage}
          />
          <View style={styles.divider} />
          <Text style={styles.loginTitle}>Faça seu login</Text>
        </View>

        {/* Campo de entrada para o nome de usuário */}
        <TextInput
          style={[styles.input, { color: '#DDE3F0' }]}
          placeholder="Nome de usuário"
          onChangeText={(text) => setUsername(text)}
          onFocus={() => setIsFocusedUsername(true)}
          onBlur={() => setIsFocusedUsername(false)}
          placeholderTextColor="#DDE3F0"
        />

        {/* Campo de entrada para a senha */}
        <TextInput
          style={[styles.input, { color: '#DDE3F0' }]}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
          placeholderTextColor="#DDE3F0"
        />

        {/* Botão para realizar o login */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Botão para navegar para a tela de registro */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('RegisterScreen')}
        >
          <Text style={styles.registerButtonText}>
            Não tem uma conta? Registre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
