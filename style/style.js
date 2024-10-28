import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#4A4A4A', 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    paddingTop: 15,
    zIndex: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  title: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 26,
    letterSpacing: 1,
  },

  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#4A4A4A', 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  author: {
    color: '#FFFFFF',
    fontSize: 18,
    fontStyle: 'italic',
    letterSpacing: 0.8,
  },

  gameboard: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },

  row: {
    marginTop: 20,
    padding: 10,
  },

  flex: {
    flexDirection: 'row',
  },

  button: {
    margin: 25,
    padding: 15,
    backgroundColor: '#d1965a', 
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  rulesContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    padding: 10,
    margin: 5,
    marginVertical: 20,
    shadowColor: '#000',
    height: '100%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },

  rulesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },

  rulesSectionTitle: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#4ECDC4',
  },

  rulesText: {
    fontSize: 13,
    marginBottom: 10,
    lineHeight: 24,
    color: '#555555',
  },

  goodLuckText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#4A4A4A',
  },

  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },

  input: {
    height: 50,
    width: 200,
    borderColor: '#4ECDC4',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  gameboardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  rollButton: {
    width: 250,
    height: 60,
    backgroundColor: '#d1965a',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 52,
  },

  infoText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },

  statusText: {
    fontSize: 16,
    color: '#FF5722', // Updated to a vibrant coral for status
    marginBottom: 20,
  },

  playerText: {
    fontSize: 20,
    color: '#333',
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#EAF6F6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },

  pointsCell: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 5,
    marginVertical: 30,
    alignItems: 'center',
  },

  totalPointsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color: '#4ECDC4',
  },

  selectedPointsCell: {
    backgroundColor: '#8de880',
  },
});
