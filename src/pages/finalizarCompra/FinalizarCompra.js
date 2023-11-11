import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './finalizarCompraStyle';

const FinalizarCompra = ({ route, navigation }) => {
  const { jogosSelecionados } = route.params;
  const [totalValue, setTotalValue] = useState(0);
  const [pagamentoEfetuado, setPagamentoEfetuado] = useState(false);
  const [codigoPix, setCodigoPix] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const jogo of jogosSelecionados) {
      const price = parseFloat(jogo.price.replace('R$', '').trim());
      total += price;
    }
    total -= total * (discount / 100); // Apply the discount
    setTotalValue(total);
  }, [jogosSelecionados, discount]);

  const handlePagarViaPix = () => {
    // Generate the Pix code here
    const codigoPixGerado =
      '00020126330014BR.GOV.BCB.PIX0111+55124354465204000053039865802BR590412356004125462070503***6304FC8F';
    setCodigoPix(codigoPixGerado);
    setPagamentoEfetuado(true);
  };

  const handleVoltarParaHome = () => {
    // Navigate back to the home page (or replace 'Home' with the appropriate route name)
    navigation.navigate('Home');
  };

  const applyDiscount = (percentage) => {
    setDiscount(percentage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finalizar Compra</Text>
      <Text style={styles.totalValue}>
        Valor Total: R$ {totalValue.toFixed(2)}
      </Text>
      <View style={styles.discountButtonsContainer}>
        <TouchableOpacity
          style={styles.discountButton}
          onPress={() => applyDiscount(10)}
        >
          <Text style={styles.discountButtonText}>Aplicar 10% de Desconto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.discountButton}
          onPress={() => applyDiscount(20)}
        >
          <Text style={styles.discountButtonText}>Aplicar 20% de Desconto</Text>
        </TouchableOpacity>
      </View>
      {!pagamentoEfetuado ? (
        <TouchableOpacity
          style={styles.finalizarButton}
          onPress={handlePagarViaPix}
        >
          <Text style={styles.finalizarButtonText}>Pagar Via Pix</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Text style={styles.codigoPix}>{codigoPix}</Text>
          <Text style={styles.obrigadoText}>Obrigado! Volte sempre.</Text>
          <TouchableOpacity
            style={styles.voltarButton}
            onPress={handleVoltarParaHome}
          >
            <Text style={styles.voltarButtonText}>Voltar à Home</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

/* export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#DDE3F0',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#DDE3F0',
  },
  finalizarButton: {
    backgroundColor: '#991F36',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  finalizarButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  codigoPix: {
    fontSize: 16,
    marginBottom: 10,
    color: '#DDE3F0',
  },
  obrigadoText: {
    fontSize: 16,
    color: '#DDE3F0',
  },
  voltarButton: {
    backgroundColor: '#355A9D',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  voltarButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  discountButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  discountButton: {
    backgroundColor: '#355A9D',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  discountButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
 */
export default FinalizarCompra;
