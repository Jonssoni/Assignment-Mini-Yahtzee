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
                    board[i] = 'dice-' + randomNumber; 
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
        if (nbrOfThrowsLeft === 0) {
            if (!selectedDicePoints[i]) {
                const count = diceSpots.filter(spot => spot === i + 1).length; 
                const points = count * (i + 1); 
    
                let newScores = [...scores];
                newScores[i] = points;
                setScores(newScores);
    
                let selectedPoints = [...selectedDicePoints];
                selectedPoints[i] = true; 
                setSelectedDicePoints(selectedPoints);
                setStatus(`You scored ${points} points for spot ${i + 1}`);
    
                resetForNewRound();
    
                // Calculate the updated total score here
                const totalPoints = newScores.reduce((acc, score) => acc + score, 0);
                if (selectedPoints.every(Boolean)) {
                    // Check if bonus applies and navigate to Scoreboard
                    const finalScore = totalPoints >= 63 ? totalPoints + 50 : totalPoints;
                    setStatus('Game over! All points selected.');
                    goToScoreboard(finalScore); 
                }
            } else {
                setStatus(`You already selected points for spot ${i + 1}`);
            }
        } else {
            setStatus('You must use all rolls before selecting points.');
        }
    };
    
    const goToScoreboard = (totalScore) => {
        navigation.navigate('Scoreboard', {
            playerName: playerName,
            totalPoints: totalScore, 
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