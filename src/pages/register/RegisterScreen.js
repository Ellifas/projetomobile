import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

// Importação dos estilos específicos para o componente RegisterScreen
import { styles } from './registerStyle';

// Componente de Registro
function RegisterScreen({ navigation }) {
  // Estados para armazenar o nome de usuário, senha, e-mail e o foco dos campos
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  // Função para lidar com o registro
  const handleRegister = () => {
    // Verifica se todos os campos estão preenchidos
    if (
      username.trim() !== '' &&
      password.trim() !== '' &&
      email.trim() !== ''
    ) {
      // Exibe um alerta de sucesso e navega para a tela Home
      Alert.alert('Sucesso', 'Registro realizado com sucesso!');
      navigation.navigate('Home');
    } else {
      // Exibe um alerta de erro se algum campo estiver vazio
      Alert.alert('Erro', 'Preencha todos os campos para se registrar.');
    }
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
          <Text style={styles.registerTitle}>Faça seu registro</Text>
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

        {/* Campo de entrada para o e-mail */}
        <TextInput
          style={[
            styles.input,
            isFocusedEmail && {
              color: '#DDE3F0',
              borderColor: '#991F36',
              borderWidth: 2,
            },
          ]}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
          placeholderTextColor="#DDE3F0"
        />

        {/* Botão para realizar o registro */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        {/* Botão para navegar para a tela de login */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>
            Já tem uma conta? Faça Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegisterScreen;
