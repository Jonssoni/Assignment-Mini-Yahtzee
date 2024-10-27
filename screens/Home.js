import { useState } from 'react';
import { Text, View, TextInput, Pressable, Keyboard, ScrollView } from 'react-native';
import styles from '../style/style';
import Header from './Header';
import Footer from './Footer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    NBR_OF_DICES,
    NBR_OF_THROWS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS
} from '../constants/Game';

export default Home = ({ navigation }) => {
    const [playerName, setPlayerName] = useState('');
    const [hasPlayerName, setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss();
        }
    };

    return (
        <View style={styles.container}>
            <Header />
        
            {!hasPlayerName ? (
              <>
              
              <Text style={styles.inputLabel}>For scoreboard, enter your name:</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={setPlayerName}
                  autoFocus={true}
                  placeholder="Enter your name"
                  placeholderTextColor="#999" // Placeholder text color
              />
              <Pressable style={styles.button} onPress={() => handlePlayerName(playerName)}>
                  <Text style={styles.buttonText}>OK</Text>
              </Pressable>
          </>
          
            ) : (
                <View style={styles.rulesContainer}>
                    <Text style={styles.rulesTitle}>Rules of the Game</Text>
                    <Text style={styles.rulesSectionTitle}>THE GAME:</Text>
                    <Text style={styles.rulesText}>
                        - You have {NBR_OF_DICES} dice and {NBR_OF_THROWS} throws per turn.
                        {'\n'}- Keep dice to achieve matching counts.
                        {'\n'}- Select points between {MIN_SPOT} and {MAX_SPOT} at the end of your turn.
                        {'\n'}- The order of selection is free.
                    </Text>
                    <Text style={styles.rulesSectionTitle}>POINTS:</Text>
                    <Text style={styles.rulesText}>
                        - Only the dice with matching counts contribute to your score.
                        {'\n'}- You cannot select the same points again from {MIN_SPOT} to {MAX_SPOT}.
                    </Text>
                    <Text style={styles.rulesSectionTitle}>GOAL:</Text>
                    <Text style={styles.rulesText}>
                        - Aim to score as many points as possible.
                        {'\n'}- {BONUS_POINTS_LIMIT} points is the limit for a bonus, granting you {BONUS_POINTS} additional points.
                    </Text>
                    <Text style={styles.goodLuckText}>Good luck, {playerName}!</Text>
                    <Pressable style={styles.button}
                        onPress={() => navigation.navigate('Gameboard', { player: playerName })}>
                        <Text style={styles.buttonText}>PLAY</Text>
                    </Pressable>
                </View>
            )}
            <Footer />
        </View>
    );
};
