import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../style/style';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { NBR_OF_DICES, NBR_OF_THROWS, MAX_SPOT } from '../constants/Game';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Row, Col } from 'react-native-flex-grid';
import React from 'react';

let board = [];

export default function Gameboard({ navigation, route }) {
    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status, setStatus] = useState('Throw dices..');
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
    const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));
    const [scores, setScores] = useState(new Array(MAX_SPOT).fill(0));
    const [playerName, setPlayerName] = useState('');

    useEffect(() => {
        if (playerName === '' && route.params?.player) {
            setPlayerName(route.params.player);
        }

        // Load previous scores if available
        if (route.params?.previousScores) {
            setScores(route.params.previousScores);
        }
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            if (route.params?.resetGame) {
                resetGameState();
            }
        }, [route.params?.resetGame])
    );

    const throwDices = () => {
        if (nbrOfThrowsLeft > 0) {
            let spots = [...diceSpots];
            for (let i = 0; i < NBR_OF_DICES; i++) {
                if (!selectedDices[i]) {
                    let randomNumber = Math.floor(Math.random() * 6 + 1);
                    board[i] = 'dice-' + randomNumber; // Assuming you have dice images named 'dice-1' to 'dice-6'
                    spots[i] = randomNumber;
                }
            }
            setDiceSpots(spots);
            setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
            setStatus(nbrOfThrowsLeft === 1 ? 'Last throw! Select your points after this.' : 'Select dices or roll again');
        } else {
            setStatus('No throws left. Please select your points.');
        }
    };

    const chooseDice = (i) => {
        let dices = [...selectedDices];
        dices[i] = !selectedDices[i];
        setSelectedDices(dices);
    };

    const chooseDicePoints = (i) => {
        // Check if points can be selected
        if (nbrOfThrowsLeft === 0) {
            if (!selectedDicePoints[i]) {
                const count = diceSpots.filter(spot => spot === i + 1).length; // Count how many times the point is rolled
                const points = count * (i + 1); // Calculate the score based on the count
    
                // Update scores
                let newScores = [...scores];
                newScores[i] = points;
                setScores(newScores);
    
                let selectedPoints = [...selectedDicePoints];
                selectedPoints[i] = true; // Mark the point as selected
                setSelectedDicePoints(selectedPoints);
                setStatus(`You scored ${points} points for spot ${i + 1}`);
    
                // Check for the bonus
                if (points === 63) {
                    const bonus = 50;
                    const totalPoints = scores.reduce((acc, score) => acc + score, 0) + bonus;
                    setScores((prevScores) => prevScores.map((score, idx) => (idx === i ? score + bonus : score))); // Add bonus to the score
                    setStatus(`You also received a bonus of ${bonus} points for scoring 63! Total points: ${totalPoints}`);
                }
    
                // Reset the game state for the new round
                resetForNewRound();
    
                // Check if all slots are filled to end the game
                if (selectedPoints.every(Boolean)) {
                    setStatus('Game over! All points selected.');
                    goToScoreboard(); // Navigate to the scoreboard
                }
            } else {
                setStatus(`You already selected points for spot ${i + 1}`);
            }
        } else {
            setStatus('You must use all rolls before selecting points.');
        }
    };
    

    const goToScoreboard = () => {
        const totalPoints = scores.reduce((acc, score) => acc + score, 0);
        const finalScore = totalPoints > 63 ? totalPoints + 50 : totalPoints; // Add 50 if totalPoints > 63
        navigation.navigate('Scoreboard', {
            playerName: playerName,
            totalPoints: finalScore, // Pass the final score to the scoreboard
        });
    };

    const resetGameState = () => {
        setNbrOfThrowsLeft(NBR_OF_THROWS);
        setSelectedDices(new Array(NBR_OF_DICES).fill(false));
        setDiceSpots(new Array(NBR_OF_DICES).fill(0));
        setSelectedDicePoints(new Array(MAX_SPOT).fill(false));
        setScores(new Array(MAX_SPOT).fill(0));
        setPlayerName(route.params?.player || '');
        setStatus('Throw dices..');
        board = [];
    };

    const resetForNewRound = () => {
        setNbrOfThrowsLeft(NBR_OF_THROWS);
        setSelectedDices(new Array(NBR_OF_DICES).fill(false));
        setDiceSpots(new Array(NBR_OF_DICES).fill(0));
        setStatus('Throw dices..');
        board = [];
    };

    const dicesRow = Array.from({ length: NBR_OF_DICES }, (_, i) => (
        <Col key={"dice" + i}>
            <Pressable onPress={() => chooseDice(i)}>
                <MaterialCommunityIcons
                    name={board[i]}
                    size={50}
                    color={selectedDices[i] ? "black" : "steelblue"}
                />
            </Pressable>
        </Col>
    ));

    const pointsRow = Array.from({ length: MAX_SPOT }, (_, i) => (
        <Col key={"pointsRow" + i}>
            <Pressable onPress={() => chooseDicePoints(i)} style={styles.pointsCell}>
                <Text style={styles.pointText}>{i + 1}</Text>
                <Text style={styles.scoreText}>{scores[i] > 0 ? scores[i] : '-'}</Text>
            </Pressable>
        </Col>
    ));

    return (
        <>
            <Header />
            <View style={styles.gameboardContainer}>
                <Container>
                    <Row>{dicesRow}</Row>
                </Container>
                <Text style={styles.infoText}>Rolls left: {nbrOfThrowsLeft}</Text>
                <Text style={styles.statusText}>{status}</Text>
                <Pressable style={styles.rollButton} onPress={throwDices}>
                    <Text style={styles.buttonText}>ROLL DICE</Text>
                </Pressable>
                <Text style={styles.playerText}>Player: {playerName}</Text>
                <Container>
                    <Row>{pointsRow}</Row>
                </Container>
            </View>
            <Footer />
        </>
)};