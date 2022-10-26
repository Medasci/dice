import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react'

import zero from './img/dice-empty.png'
import img1 from './img/dice1.png'
import img2 from './img/dice2.png'
import img3 from './img/dice3.png'
import img4 from './img/dice4.png'
import img5 from './img/dice5.png'
import img6 from './img/dice6.png'


const Dice = () => {

    const diceImages = [zero, img1, img2, img3, img4, img5, img6]
    const [dicImg, setDiceImg] = useState(zero)

    useEffect(() => {
        if (dicImg === zero) {
            setTimeout(diceRoll, 1000)
        }

    });

    const diceRoll = () => {
        let randomNumber = Math.floor(Math.random() * 6 );
        console.log(randomNumber);

        setDiceImg(diceImages[randomNumber])

    }

    const diceHandler = () => {
        setDiceImg(zero)
    }

    return (
        <img className='Dice' onClick={diceHandler} src={dicImg} alt='' />
    )

}

export default Dice;