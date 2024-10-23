import { Text, View, Pressable } from 'react-native';
import styles from '../style/style';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import {
    NBR_OF_DICES,
    NBR_OF_THROWS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS
} from '../constants/Game';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Row, Col } from 'react-native-flex-grid'

let board = []


export default Gameboard = ({ navigation, route }) => {


    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [nbrOfDicesLeft, setNbrOfDicesLeft] = useState(NBR_OF_DICES);
    const [status, setStatus] = useState('Throw dices..');
    const [gameEndStatus, setGameEndStatus] = useState(false);
    // Mitkä arpakuutioista ovat valittuina
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    // Arpakuutioiden silmäluvut
    const [diceSpots, setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
    // Mitkä arpakuutioiden silmäluvuista on valittu pisteisiin
    const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(0));
    // Valittujen arpakuutioiden kokonaispistemäärät
    const [dicePointsTotal, setDicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));
    const [playerName, setPlayerName] = useState('');

    useEffect(() => {
        if (playerName === '' && route.params?.player) {
            setPlayerName(route.params.player);
        }
    }, []);

    // tässä luodaan arpakuutiorivi sarakkeittain
    const dicesRow = [];
    for (let dice = 0; dice < NBR_OF_DICES; dice++) {
    dicesRow.push(
    <Col key={"dice" + dice}>
    <Pressable
    key={"row" + dice}
    onPress={() => chooseDice(dice)}>
    <MaterialCommunityIcons
    name={board[dice]}
    key={"dice" + dice}
    size={50}
    color={getDiceColor(dice)}>
    </MaterialCommunityIcons>
    </Pressable>
    </Col>
    );
    }

    // Tässä luodaan pisterivi sarakkeittain (Col)
    const pointsRow = [];
for (let spot = 0; spot < MAX_SPOT; spot++) {
pointsRow.push(
<Col key={"pointsRow" + spot}>
<Text key={"pointsRow" + spot}>

</Text>
</Col>
);
}

    // tässä luodaan rivi, joka kertoo onko pisteet jo valittu silmäluvulle
    const pointsToSelectRow = [];
    for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
    pointsToSelectRow.push(
    <Col key={"buttonsRow" + diceButton}>
    <Pressable key={"buttonsRow" + diceButton}
    onPress={() => chooseDicePoints(diceButton)}>
    <MaterialCommunityIcons
    name={"numeric-" + (diceButton + 1) + "-circle"}
    key={"buttonsRow" + diceButton}
    size={35}
    color={getDicePointsColor(diceButton)}>
    </MaterialCommunityIcons>
    </Pressable>
    </Col>
    );
    }

    const chooseDice = (i) => {
        if (nbrOfThrowsLeft < NBR_OF_THROWS && !gameEndStatus) {
        let dices = [...selectedDices];
        dices[i] = selectedDices[i] ? false : true;
        setSelectedDices(dices);
        }
        else {
        setStatus('Roll dice first');
        }
    }

    const chooseDicePoints = (i) => {
        if (nbrOfThrowsLeft === 0) {
        let selectedPoints = [...selectedDicePoints];
        let points = [...dicePointsTotal];
        if (!selectedPoints[i]) {
            selectedPoints[i] = true;
            let nbrOfDices = diceSpots.reduce((total, x) => (x === i + 1 ? total + 1 : total), 0);
            points[i] = nbrOfDices * (i + 1);   
            
        }
        else {
            setStatus("You already selected points for spot "  (i + 1));
            return points [i];
        }
        setDicePointsTotal(points);
        setSelectedDicePoints(selectedPoints);
        return points[i];
    }
    else {
        setStatus("Throw" + NBR_OF_THROWS + "times before settings points.");
    }
    }
        
        function getDiceColor(i) {
        return selectedDices[i] ? "black" : "steelblue";
        }

        function getDicePointsColor(i) {
            return selectedDicePoints[i] && !gameEndStatus ? "black" : "steelblue";
            }

    const throwDices = () => {
        let spots = [...diceSpots];
        for (let i = 0; i < NBR_OF_DICES; i++) {
        if (!selectedDices[i]) {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        board[i] = 'dice-' + randomNumber;
        spots[i] = randomNumber;
        }
        }
        setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
        setDiceSpots(spots);
        setStatus('Select dices or roll again');
        }

    return (
        <>
            <Header />
            <View>
                <Container>
                    <Row>{dicesRow}</Row>
                </Container>
                <Text>Rolls left: {nbrOfThrowsLeft}</Text>
                <Text>{status}</Text>
                <Pressable
                    onPress={() => throwDices()}>
                    <Text>ROLL DICE</Text>
                </Pressable>
                <Text>Player: {playerName}</Text>
                <Container>
                    <Row>{pointsRow}</Row>
                </Container>
                <Container>
                    <Row>{pointsToSelectRow}</Row>
                </Container>
                
            </View>
            <Footer />
        </>
    )
}

