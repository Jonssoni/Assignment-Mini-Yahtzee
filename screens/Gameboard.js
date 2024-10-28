import { Text, View, StyleSheet, Pressable, Animated, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../style/style';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect, useRef } from 'react';
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
    const [bonusAchieved, setBonusAchieved] = useState(false);
  
    const scaleAnim = useRef(new Animated.Value(1)).current;

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

    const animateButton = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.2,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const throwDices = () => {
        animateButton(); 

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
                const points = count > 0 ? count * (i + 1) : 0;
    
                let newScores = [...scores];
                newScores[i] = points;
                setScores(newScores);
    
                let selectedPoints = [...selectedDicePoints];
                selectedPoints[i] = true;
                setSelectedDicePoints(selectedPoints);
                setStatus(`You scored ${points} points for spot ${i + 1}`);
    
                resetForNewRound();
    
                const totalPoints = newScores.reduce((acc, score) => acc + score, 0);
    
              
                if (totalPoints >= 63 && !bonusAchieved) {
                    Alert.alert(
                        'Bonus Achieved!',
                        'Congratulations! You earned a 50-point bonus!',
                        [{ text: 'OK' }]
                    );
                    setBonusAchieved(true); 
                }
    
                if (selectedPoints.every(Boolean)) {
                   
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
        setBonusAchieved(false);
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
                    size={60}
                    color={selectedDices[i] ? "black" : "grey"}
                />
            </Pressable>
        </Col>
    ));

    const pointsRow = Array.from({ length: MAX_SPOT }, (_, i) => (
        <Col key={"pointsRow" + i}>
            <Pressable 
                onPress={() => chooseDicePoints(i)} 
                style={[
                    styles.pointsCell, 
                    selectedDicePoints[i] && styles.selectedPointsCell 
                ]}
            >
                <Text style={styles.pointText}>{i + 1}</Text>
                <Text style={styles.scoreText}>{scores[i] > 0 ? scores[i] : '-'}</Text>
            </Pressable>
        </Col>
    ));

    const totalPoints = scores.reduce((acc, score) => acc + score, 0);


    return (
        <>
            <Header />
            <View style={styles.gameboardContainer}>
                <Container>
                    <Row>{dicesRow}</Row>
                </Container>
                <Text style={styles.infoText}>Rolls left: {nbrOfThrowsLeft}</Text>
                <Text style={styles.statusText}>{status}</Text>
    
               
                <Container>
                    <Row>{pointsRow}</Row>
                </Container>
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <Pressable style={styles.rollButton} onPress={throwDices}>
                        <Text style={styles.buttonText}>ROLL DICES</Text>
                    </Pressable>
                </Animated.View>
    
              
                <Text style={styles.totalPointsText}>Total Points: {totalPoints}</Text>
                <Text style={styles.playerText}>Player: {playerName}</Text>
            </View>
            <Footer />
        </>
    );
};
