import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
