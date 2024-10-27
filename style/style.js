import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60, // Space for the fixed header height
    paddingBottom: 60, // Space for the fixed footer height
    alignItems: 'center',
    justifyContent: 'center',
},
  
header: {
  position: 'absolute', // Position header at the top of the screen
  top: 0,
  width: '100%',
  height: 60,
  backgroundColor: '#4ECDC4', // Set a background color
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  paddingTop: 10,
  zIndex: 10, // Ensure it layers above other elements
},


title: {
  color: '#ffffff', // White text for contrast
  fontWeight: 'bold',
  fontSize: 24,
},

footer: {
  width: '100%',
  height: 60,
  backgroundColor: '#4ECDC4',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: {
      width: 0,
      height: -2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},
  author: {
    color: '#ffffff',
    fontSize: 16,
    fontStyle: 'italic',
  },
  gameboard: {
    flex: 1,
    backgroundColor: '#EAF6F6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  gameinfo: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    marginTop: 20,
    padding: 10,
  },
  flex: {
    flexDirection: 'row',
  },
  button: {
    margin: 30,
    padding: 15,
    backgroundColor: '#4ECDC4',
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
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rulesContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 5,
    margin: 5,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  rulesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2B2B52',
  },
  rulesSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#4ECDC4',
  },
  rulesText: {
    fontSize: 15,
    marginBottom: 10,
    lineHeight: 24,
    color: '#333',
  },
  goodLuckText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#2B2B52',
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#4ECDC4',
    borderWidth: 2,
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
  diceButton: {
    padding: 10,
    margin: 5,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
  statusText: {
    fontSize: 16,
    color: 'orange',
    marginBottom: 20,
  },
  rollButton: {
    padding: 15,
    backgroundColor: '#4ECDC4',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  playerText: {
    fontSize: 20,              // Font size for player text
    color: '#333',             // Text color
    marginTop: 50,             // Increase space above the player text
    textAlign: 'center',       // Center the text horizontally
    fontWeight: 'bold',        // Make the text bold
    padding: 10,               // Add padding around the text
    backgroundColor: '#EAF6F6', // Optional: add a background color
    borderRadius: 10,          // Optional: round the corners
    shadowColor: '#000',       // Optional: shadow for depth
    shadowOffset: {            // Optional: shadow offset
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,        // Optional: shadow opacity
    shadowRadius: 2,           // Optional: shadow blur radius
    elevation: 3,              // Optional: elevation for Android shadow
},


pointsCell: {
  backgroundColor: '#f0f0f0', // Light background color
  borderRadius: 10, // Rounded corners
  padding:5, // Padding around the text
  marginVertical: 30, // Space between rows
  alignItems: 'center', // Center content
},
totalPointsText: {
  fontSize: 20, // Font size for total points
  fontWeight: 'bold', // Bold text
  marginTop: 30, // Space above the total points text
  textAlign: 'center', // Center the text
  color: '#4ECDC4', // Color for total points text
},
});
