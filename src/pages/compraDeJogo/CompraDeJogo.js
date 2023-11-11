import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { styles } from './compraDeJogoStyle';

const ComprarDeJogos = ({ route }) => {
  const { jogosSelecionados } = route.params;
  const [jogosLocaisSelecionados, setJogosLocaisSelecionados] =
    useState(jogosSelecionados);
  const navigation = useNavigation();

  const handleExcluirJogo = (jogoId) => {
    try {
      if (typeof jogoId !== 'number' || jogoId <= 0) {
        throw new Error('O jogoId deve ser um número positivo válido.');
      }

      const updatedJogosSelecionados = jogosLocaisSelecionados.filter(
        (jogo) => jogo.id !== jogoId,
      );

      setJogosLocaisSelecionados(updatedJogosSelecionados);

      console.log(`Jogo com ID ${jogoId} excluído com sucesso.`);
    } catch (error) {
      console.error('Erro ao excluir o jogo:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <View style={styles.carrinhoContainer}>
        <Image
          source={require('../../../assets/carrinhoIMG.png')}
          style={styles.carrinhoImage}
        />
      </View>
      <FlatList
        data={jogosLocaisSelecionados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.jogoItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleExcluirJogo(item.id)}>
              <Icon name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.finalizarButton}
          onPress={() => {
            navigation.navigate('FinalizarCompra', {
              jogosSelecionados: jogosLocaisSelecionados,
            });
          }}
        >
          <Text style={styles.finalizarButtonText}>Finalizar Compra</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.continuarComprandoButton}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Text style={styles.continuarComprandoButtonText}>
            Continuar Comprando
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/* export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center', // Centraliza os elementos no eixo horizontal
    padding: 10,
  },
  carrinhoContainer: {
    position: 'absolute', // Torna a imagem do carrinho absoluta
    top: '50%', // Centraliza verticalmente
    left: '50%', // Centraliza horizontalmente
    transform: [{ translateX: -100 }, { translateY: -100 }], // Ajusta a posição
  },
  carrinhoImage: {
    width: 200, // Largura desejada
    height: 200, // Altura desejada
  },
  jogoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(221, 227, 240, 0.1)',
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#991F36',
    borderWidth: 1,
    width: '88%', // Ocupa a largura total da tela
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#DDE3F0', // Texto branco
  },
  price: {
    fontSize: 16,
    color: '#DDE3F0', // Texto branco
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#DDE3F0', // Texto branco
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  finalizarButton: {
    backgroundColor: '#991F36',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  finalizarButtonText: {
    color: '#DDE3F0',
    fontWeight: 'bold',
  },
  continuarComprandoButton: {
    backgroundColor: '#991F36',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    flex: 1,
  },
  continuarComprandoButtonText: {
    color: '#DDE3F0',
    fontWeight: 'bold',
  },
});
 */
export default ComprarDeJogos;
