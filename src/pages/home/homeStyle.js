import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#991F36',
    borderWidth: 3,
  },
  userInfo: {
    marginLeft: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DDE3F0',
  },
  userQuote: {
    fontSize: 16,
    marginTop: 10,
    color: '#DDE3F0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: '#DDE3F0',
  },
  gameItem: {
    flexDirection: 'row',
    backgroundColor: '#000',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(198, 13, 13, 1)',
  },
  gameImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  gameDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameInfo: {
    flex: 1,
    marginLeft: 10,
  },
  gameName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#DDE3F0',
  },
  gamePrice: {
    fontSize: 16,
    color: '#DDE3F0',
  },
  addToCartButton: {
    backgroundColor: '#991F36',
    borderRadius: 5,
    padding: 5,
    position: 'relative',
    top: 30,
  },
  addToCartButtonText: {
    color: '#DDE3F0',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    margin: 10,
  },
  button: {
    backgroundColor: '#991F36',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#DDE3F0',
    borderWidth: 1,
  },
  buttonText: {
    color: '#DDE3F0',
    fontSize: 16,
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContent: {
    backgroundColor: 'rgba(221, 227, 240, 0.1)',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#991F36',
  },
  popupText: {
    color: '#fff',
    fontSize: 16,
  },
});
