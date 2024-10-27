import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function Scoreboard({ route, navigation }) {
    const { playerName, totalPoints } = route.params || {}; // Safely access parameters

    const [scores, setScores] = useState([]);

    // Load scores from the route parameters when the component mounts
    useEffect(() => {
        if (playerName && totalPoints !== undefined) {
            // Append new score to existing scores
            setScores(prevScores => [...prevScores, { name: playerName, points: totalPoints }]);
        }
    }, [playerName, totalPoints]);

    // Filter and sort scores in descending order
    const validScores = scores.filter(score => score.points > 0);
    const sortedScores = [...validScores].sort((a, b) => b.points - a.points);

    const restartGame = () => {
        navigation.navigate('Gameboard', {
            resetGame: true, // Pass a flag to indicate game reset
            player: playerName, // Optionally pass player name
        });
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.scoreboardContainer}>
                <Text style={styles.title}>Scoreboard</Text>
                {/* Header for the scoreboard */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>Placement</Text>
                    <Text style={styles.headerText}>Name</Text>
                    <Text style={styles.headerText}>Score</Text>
                </View>
                <FlatList
                    data={sortedScores}
                    keyExtractor={(item, index) => `${item.name}-${item.points}-${index}`} // Ensure unique keys
                    renderItem={({ item, index }) => (
                        <View style={styles.scoreItem}>
                            <Text style={styles.rankText}>{index + 1}</Text>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.pointsText}>{item.points}</Text>
                        </View>
                    )}
                />
            </View>
            <Pressable onPress={restartGame}>
                <Text style={styles.restartButtonText}>Restart Game</Text>
            </Pressable>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scoreboardContainer: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    scoreItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    rankText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
    },
    pointsText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    restartButtonText: {
        fontSize: 18,
        color: 'steelblue',
        textAlign: 'center',
        marginVertical: 20,
    },
});
