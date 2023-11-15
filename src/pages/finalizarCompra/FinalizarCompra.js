import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './finalizarCompraStyle';

const FinalizarCompra = ({ route, navigation }) => {
  // Extrai os jogos selecionados dos parâmetros de rota
  const { jogosSelecionados } = route.params;

  // Estado local para armazenar o valor total da compra
  const [totalValue, setTotalValue] = useState(0);

  // Estado local para controlar se o pagamento foi efetuado
  const [pagamentoEfetuado, setPagamentoEfetuado] = useState(false);

  // Estado local para armazenar o código Pix gerado
  const [codigoPix, setCodigoPix] = useState('');

  // Estado local para armazenar o desconto aplicado
  const [discount, setDiscount] = useState(0);

  // Efeito para calcular o valor total da compra quando jogosSelecionados ou discount mudam
  useEffect(() => {
    let total = 0;
    for (const jogo of jogosSelecionados) {
      const price = parseFloat(jogo.price.replace('R$', '').trim());
      total += price;
    }
    total -= total * (discount / 100); // Aplica o desconto
    setTotalValue(total);
  }, [jogosSelecionados, discount]);

  // Função para lidar com o pagamento via Pix
  const handlePagarViaPix = () => {
    // Gerar o código Pix aqui
    const codigoPixGerado =
      '00020126330014BR.GOV.BCB.PIX0111+55124354465204000053039865802BR590412356004125462070503***6304FC8F';
    setCodigoPix(codigoPixGerado);
    setPagamentoEfetuado(true);
  };

  // Função para voltar para a tela inicial
  const handleVoltarParaHome = () => {
    // Navegar de volta para a página inicial (ou substituir 'Home' pelo nome da rota apropriada)
    navigation.navigate('Home');
  };

  // Função para aplicar desconto
  const applyDiscount = (percentage) => {
    setDiscount(percentage);
  };

  return (
    <View style={styles.container}>
      {/* Título da tela de finalização de compra */}
      <Text style={styles.title}>Finalizar Compra</Text>

      {/* Valor total da compra */}
      <Text style={styles.totalValue}>
        Valor Total: R$ {totalValue.toFixed(2)}
      </Text>

      {/* Container dos botões de desconto */}
      <View style={styles.discountButtonsContainer}>
        {/* Botão para aplicar 10% de desconto */}
        <TouchableOpacity
          style={styles.discountButton}
          onPress={() => applyDiscount(10)}
        >
          <Text style={styles.discountButtonText}>Aplicar 10% de Desconto</Text>
        </TouchableOpacity>

        {/* Botão para aplicar 20% de desconto */}
        <TouchableOpacity
          style={styles.discountButton}
          onPress={() => applyDiscount(20)}
        >
          <Text style={styles.discountButtonText}>Aplicar 20% de Desconto</Text>
        </TouchableOpacity>
      </View>

      {/* Condição para renderizar o botão de pagamento ou mensagem de conclusão */}
      {!pagamentoEfetuado ? (
        <TouchableOpacity
          style={styles.finalizarButton}
          onPress={handlePagarViaPix}
        >
          <Text style={styles.finalizarButtonText}>Pagar Via Pix</Text>
        </TouchableOpacity>
      ) : (
        <>
          {/* Código Pix gerado */}
          <Text style={styles.codigoPix}>{codigoPix}</Text>

          {/* Mensagem de agradecimento */}
          <Text style={styles.obrigadoText}>Obrigado! Volte sempre.</Text>

          {/* Botão para voltar à tela inicial */}
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

export default FinalizarCompra;
