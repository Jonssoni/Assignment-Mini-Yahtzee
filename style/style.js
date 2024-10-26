import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    padding: 20, // Optional padd
  
  },
  header: {
    width: '100%', // Full width
    height: 60, // Fixed height
    backgroundColor: '#4ECDC4', // Vibrant background color
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    paddingTop: 10, // Add padding for better spacing
    borderBottomLeftRadius: 15, // Rounded corners
    borderBottomRightRadius: 15,
  },

  title: {
    color: '#ffffff', // White text for contrast
        fontWeight: 'bold',
        fontSize: 24, // Increased font size
  },
  footer: {
    width: '100%', // Full width
    height: 60, // Fixed height
    backgroundColor: '#4ECDC4', // Consistent background color with the header
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {
        width: 0,
        height: -2, // Slightly raised shadow
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    position: 'absolute', // Fixed at the bottom
    bottom: 0,
},

author: {
  color: '#ffffff', // White text for contrast
  fontSize: 16, // Font size for the author
  fontStyle: 'italic', // Italic style for emphasis
},
  gameboard: {
    flex: 1,
    backgroundColor: '#EAF6F6', // Soft background color
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderTopLeftRadius: 20, // Rounded corners
    borderTopRightRadius: 20,
    marginTop: 10,
},

gameinfo: {
    backgroundColor: '#ffffff', // White background for info sections
    borderRadius: 15, // Rounded corners
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
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    padding: 15,
    backgroundColor: "#4ECDC4", // Change to a more vibrant color
    borderRadius: 25, // More pronounced rounding
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Add shadow effect
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
},
buttonText: {
    color: "#ffffff", // White text for contrast
    fontSize: 18,
    fontWeight: 'bold',
},
rulesContainer: {
  backgroundColor: '#ffffff',
  borderRadius: 15,
  padding: 20,
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
  fontSize: 16,
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
  marginBottom: 10, // Space between label and input
  color: '#333', // Dark text color
  textAlign: 'center', // Center the label
},

input: {
  height: 50, // Fixed height for input
  borderColor: '#4ECDC4', // Border color
  borderWidth: 2, // Border width
  borderRadius: 10, // Rounded edges
  paddingLeft: 15, // Padding for text inside input
  marginBottom: 20, // Space between input and button
  fontSize: 16, // Font size for input text
  color: '#333', // Text color
  backgroundColor: '#fff', // White background for input
  shadowColor: '#000', // Shadow for input
  shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2, // Elevation for Android shadow
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
buttonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},
playerText: {
  fontSize: 18,
  color: '#333',
  marginTop: 10,
},
});


