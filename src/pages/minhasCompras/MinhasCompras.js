import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

// Importação dos estilos específicos para o componente MinhasCompras
import { styles } from './minhasComprasStyle';

// Componente de Cartão de Compra
const PurchaseCard = ({ purchase }) => (
  <View style={styles.purchaseCard}>
    <View style={styles.card}>
      {/* Imagem do jogo da compra */}
      <Image source={{ uri: purchase.game.image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        {/* Nome e preço do jogo */}
        <Text style={styles.cardName}>{purchase.game.name}</Text>
        <Text style={styles.cardPrice}>{purchase.game.price}</Text>
      </View>
    </View>
    <View style={styles.purchaseDetails}>
      {/* Detalhes da compra: quantidade, data de chegada e status de entrega */}
      <Text style={styles.quantity}>Quantidade: {purchase.quantity}</Text>
      <Text style={styles.deliveryDate}>
        Data de Chegada: {purchase.deliveryDate}
      </Text>
      <Text style={styles.deliveryStatus}>
        {purchase.delivered ? 'Entregue' : 'A caminho'}
      </Text>
    </View>
  </View>
);

// Componente principal MinhasCompras
const MinhasCompras = ({ navigation }) => {
  // Lista de compras de exemplo
  const purchases = [
    {
      id: 1,
      game: {
        name: 'State Of Decay',
        image:
          'https://cdn.cloudflare.steamstatic.com/steam/apps/329430/header_292x136.jpg?t=1683924058',
        price: 'R$37.99',
      },
      quantity: 2,
      deliveryDate: '15/11/2023',
      delivered: true,
    },
    {
      id: 2,
      game: {
        name: '7 Days to die',
        image:
          'https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header_292x136.jpg?t=1697073509',
        price: 'R$44.99',
      },
      quantity: 1,
      deliveryDate: '20/11/2023',
      delivered: false,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Minhas Compras</Text>
      {/* Lista horizontal de cartões de compra */}
      <FlatList
        data={purchases}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.purchaseItem}>
            <PurchaseCard purchase={item} />
          </View>
        )}
      />
      {/* Botão para voltar para a tela Home */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MinhasCompras;
