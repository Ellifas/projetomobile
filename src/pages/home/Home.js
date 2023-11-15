import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './homeStyle.js';

const Header = ({ userName }) => (
  <View style={styles.header}>
    <Image
      source={require('../../../assets/userImage.jpg')}
      style={styles.userImage}
    />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{`Olá, ${userName}!`}</Text>
      <Text style={styles.userQuote}>Hoje é dia de vitória!</Text>
    </View>
  </View>
);

const Home = () => {
  const navigation = useNavigation();
  const [carrinho, setCarrinho] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const gamesArray = [
    {
      id: 1,
      name: 'State Of Decay',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/329430/header_292x136.jpg?t=1683924058',
      price: 'R$37.99',
    },
    {
      id: 2,
      name: '7 Days to die',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header_292x136.jpg?t=1697073509',
      price: 'R$44.99',
    },
    {
      id: 3,
      name: 'No One Survived',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1963370/header_292x136.jpg?t=1689219903',
      price: 'R$52.49',
    },
    {
      id: 4,
      name: 'Project Zomboid',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header_292x136.jpg?t=1691508011',
      price: 'R$59.99',
    },
    {
      id: 5,
      name: 'Valheim',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header_292x136.jpg?t=1692705902',
      price: 'R$37.99',
    },
    {
      id: 6,
      name: 'Ground',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/962130/header_292x136.jpg?t=1684963474',
      price: 'R$199.99',
    },
  ];

  const adicionarAoCarrinho = (jogo) => {
    const jogoNoCarrinho = carrinho.find(
      (jogoCarrinho) => jogoCarrinho.id === jogo.id,
    );

    if (jogoNoCarrinho) {
      setPopupMessage(`O jogo ${jogo.name} já está no carrinho.`);
    } else {
      setCarrinho([...carrinho, jogo]);
      setPopupMessage(`Jogo ${jogo.name} adicionado ao carrinho.`);
    }

    setShowPopup(true);
  };

  const navigateToAddGame = () => {
    navigation.navigate('AdicionarJogo');
  };

  const navigateToCart = () => {
    navigation.navigate('CompraDeJogo', { jogosSelecionados: carrinho });
  };

  const navigateToMyPurchases = () => {
    navigation.navigate('MinhasCompras');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      closePopup();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [showPopup]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header userName="Davi" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                { marginRight: 10, width: 120, height: 40 },
              ]}
              onPress={navigateToAddGame}
            >
              <Text style={styles.buttonText}>Adicionar Jogo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { marginRight: 10, width: 120, height: 40 },
              ]}
              onPress={navigateToCart}
            >
              <Text style={styles.buttonText}>Carrinho</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { marginRight: 10, width: 120, height: 40 },
              ]}
              onPress={navigateToMyPurchases}
            >
              <Text style={styles.buttonText}>MinhasCompras</Text>
            </TouchableOpacity>
            {/* Adicione outros botões aqui... */}
          </View>
        </ScrollView>
        <View style={styles.lastReleasesContainer}>
          <Text style={styles.sectionTitle}>Últimas Novidades</Text>
          <View>
            {gamesArray.map((item) => (
              <View key={item.id} style={styles.gameItem}>
                <Image source={{ uri: item.image }} style={styles.gameImage} />
                <View style={styles.gameDetails}>
                  <View style={styles.gameInfo}>
                    <Text style={styles.gameName}>{item.name}</Text>
                    <Text style={styles.gamePrice}>{item.price}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => {
                      if (
                        !carrinho.find(
                          (jogoCarrinho) => jogoCarrinho.id === item.id,
                        )
                      ) {
                        adicionarAoCarrinho(item);
                      }
                    }}
                  >
                    <Text style={styles.addToCartButtonText}>
                      Adicionar ao Carrinho
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        {showPopup && (
          <Modal
            transparent={true}
            visible={showPopup}
            animationType="slide"
            onRequestClose={closePopup}
          >
            <View style={styles.popupContainer}>
              <View style={styles.popupContent}>
                <Text style={styles.popupText}>{popupMessage}</Text>
                <TouchableOpacity onPress={closePopup}></TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
