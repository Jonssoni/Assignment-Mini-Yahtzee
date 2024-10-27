import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCOREBOARD_KEY } from '../constants/Game';

export default function Scoreboard({ navigation }) {
    const [scores, setScores] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);
    const [playerName, setPlayerName] = useState('');

    useEffect(() => {
        const loadScores = async () => {
            const savedScores = await AsyncStorage.getItem(SCOREBOARD_KEY);
            if (savedScores) {
                const parsedScores = JSON.parse(savedScores);
                setScores(parsedScores);

                const total = parsedScores.reduce((acc, score) => acc + score.points, 0);
                setTotalPoints(total);
            }
        };

        loadScores();
    }, []);

    const gotoGameboard = () => {
        navigation.navigate('Gameboard', { playerName, scores });
    };

    return (
        <>
            <Header />
            <View style={styles.scoreboardContainer}>
                <Text style={styles.title}>Scoreboard</Text>
                <View style={styles.table}>
                    {scores.map((score, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.rankText}>{index + 1}</Text>
                            <Text style={styles.playerText}>{score.playerName}</Text>
                            <Text style={styles.pointsText}>{score.points}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.totalPointsText}>Total Points: {totalPoints}</Text>
                <Pressable style={styles.restartButton} onPress={gotoGameboard}>
                    <Text style={styles.buttonText}>Restart Game</Text>
                </Pressable>
            </View>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    scoreboardContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    table: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    rankText: {
        fontSize: 18,
        width: 30,
    },
    playerText: {
        fontSize: 18,
        flex: 1,
    },
    pointsText: {
        fontSize: 18,
        width: 50,
        textAlign: 'right',
    },
    totalPointsText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    restartButton: {
        padding: 10,
        backgroundColor: '#4ECDC4',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
});
