import {Text, View, } from 'react-native';
import styles from '../style/style';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { SCOREBOARD_KEY } from '../constants/Game';

export default Scoreboard = () => {

    const [scores, setScores] = useState([]);

   

    return (
        <>
        <Header/>
        <View>
            <Text>Scoreboard will be here..</Text>
        </View>
        <Footer/>   
        </>
    )
}

