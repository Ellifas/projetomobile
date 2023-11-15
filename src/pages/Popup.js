import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

// Componente de Popup reutilizável
const Popup = ({ showPopup, setShowPopup, popupMessage }) => (
  <Modal
    transparent={true}
    visible={showPopup}
    animationType="slide"
    onRequestClose={() => {
      // Fechar o popup ao pressionar o botão de fechar ou tocar fora da área do popup
      setShowPopup(false);
    }}
  >
    <View style={styles.popupContainer}>
      <View style={styles.popupContent}>
        {/* Mensagem exibida no popup */}
        <Text style={styles.popupText}>{popupMessage}</Text>
        <View style={styles.buttonContainer}>
          {/* Botão para fechar o popup */}
          <TouchableOpacity
            onPress={() => {
              // Fechar o popup ao pressionar o botão "Fechar"
              setShowPopup(false);
            }}
            style={[styles.closeButton, styles.redButton]}
          >
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

// Estilos do componente
const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  popupContent: {
    backgroundColor: '#bdc3c7',
    padding: 20,
    borderRadius: 10,
    borderColor: '#c0392b',
    borderWidth: 2,
    alignItems: 'center',
    elevation: 5,
  },
  popupText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#34495e',
  },
  buttonContainer: {
    marginTop: 15, // Adicionando um espaçamento entre o texto e o botão
  },
  closeButton: {
    backgroundColor: '#c0392b',
    padding: 10,
    borderRadius: 5,
  },
  redButton: {
    backgroundColor: '#c0392b',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Popup;
