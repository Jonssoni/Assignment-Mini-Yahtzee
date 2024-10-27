import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function Scoreboard({ route, navigation }) {
    const { playerName, totalPoints } = route.params || {}; 

    const [scores, setScores] = useState([]);

    
    useEffect(() => {
        if (playerName && totalPoints !== undefined) {
            
            setScores(prevScores => [...prevScores, { name: playerName, points: totalPoints }]);
        }
    }, [playerName, totalPoints]);

    
    const validScores = scores.filter(score => score.points > 0);
    const sortedScores = [...validScores].sort((a, b) => b.points - a.points);

    const restartGame = () => {
        navigation.navigate('Gameboard', {
            resetGame: true, 
            player: playerName, 
        });
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.scoreboardContainer}>
                <Text style={styles.title}>Scoreboard</Text>
             
                <View style={styles.header}>
                    <Text style={styles.headerText}>Placement</Text>
                    <Text style={styles.headerText}>Name</Text>
                    <Text style={styles.headerText}>Score</Text>
                </View>
                <FlatList
                    data={sortedScores}
                    keyExtractor={(item, index) => `${item.name}-${item.points}-${index}`} 
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
        fontSize: 20,
        fontWeight:'bold',
        color: 'steelblue',
        textAlign: 'center',
        marginVertical: 20,
        
    },
});
