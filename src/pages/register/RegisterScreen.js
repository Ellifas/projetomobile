import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './registerStyle';

function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/union.png')}
        style={styles.containerImage}
      />
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/BGLOGO.png')}
            style={styles.logoImage}
          />
          <View style={styles.divider} />
          <Text style={styles.registerTitle}>Faça seu registro</Text>
        </View>

        <TextInput
          style={[
            styles.input,
            isFocusedUsername && { borderColor: '#991F36', borderWidth: 2 },
          ]}
          placeholder="Nome de usuário"
          onChangeText={(text) => setUsername(text)}
          onFocus={() => setIsFocusedUsername(true)}
          onBlur={() => setIsFocusedUsername(false)}
          placeholderTextColor="#DDE3F0" // Alterado para a cor branca
        />
        <TextInput
          style={[
            styles.input,
            isFocusedPassword && { borderColor: '#991F36', borderWidth: 2 },
          ]}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
          placeholderTextColor="#DDE3F0" // Alterado para a cor branca
        />
        <TextInput
          style={[
            styles.input,
            isFocusedEmail && { borderColor: '#991F36', borderWidth: 2 },
          ]}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
          placeholderTextColor="#DDE3F0" // Alterado para a cor branca
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
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

/* export const styles = StyleSheet.create({
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
  logoContainer: {
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
  logoImage: {
    width: 100,
    height: 100,
  },
  registerTitle: {
    fontSize: 24,
    color: '#DDE3F0',
  },
  input: {
    backgroundColor: 'rgba(221, 227, 240, 0.1)',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#991F36', // Alterado para vermelho
    borderWidth: 2, // Alterado para espessura 2
    color: '#DDE3F0',
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
  loginButton: {
    color: '#DDE3F0',
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#991F36',
    fontSize: 15,
  },
});
 */
export default RegisterScreen;
