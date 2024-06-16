// Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// React
import React, { useState, useRef } from 'react';

// Components
import CasillasVerbs from './game-components/Casillas-Verbs';
import BarraInfo from './game-components/Barra-Info';
import GameModal from './game-components/Game-Modal';

// Functions
import shuffleVerbs from '../scripts/Shuffle-Verbs';
import createGaps from '../scripts/Create-Gaps';
import formatTime from '../scripts/Format-Time';

// CSS
import '../style/Game.css';

// JSON
import IrregularVerbs from "../data/Irregular-Verbs.json";

// Almacena las vidas iniciales del usuario 
const VIDAS_TOTALES = 3;

const initialAnswers = {

    infinitive: '',
    simple: '',
    participle: '',
    spanish: ''
}

function Game(props) {


    // Creates de variables to store points and lives
    const [puntos, setPuntos] = useState(0);
    const [vidas, setVidas] = useState(VIDAS_TOTALES);

    // The number of verbs that are done, and the verbs
    const [position, setPosition] = useState(0);

    // The verbs, empty vebs and the hint
    const [verbs, setVerbs] = useState(shuffleVerbs(IrregularVerbs));
    const [emptyVerbs, setEmptyVerbs] = useState(createGaps(verbs));
    const [hint, setHint] = useState(emptyVerbs[position]);

    const [modal, setModal] = useState({ show: false, header: '', content: <></> })

    // The answer
    const [respuesta, setRespuesta] = useState(initialAnswers);

    // The status of the game (if is a normal verb or is it the correction)
    const [correcting, setCorrecting] = useState(false);

    //The timer
    const [time, setTime] = useState(0);
    // Referencia del tiempo
    const intervaloRef = useRef();

    // The game Status

    const [isRunning, setIsRunning] = useState(false);

    // Handle Change input  of answers
    const handleChange = (e) => {
        setRespuesta({ ...respuesta, [e.target.name]: e.target.value });
    }

    const compareAnswers = (userAnswer, correctAnswer) => {

        // Formats the answers
        function formatString(str) {

            console.log('str :>> ', str);
            return str.trim().toLowerCase();
        }

        // User
        for (const tense in userAnswer) {

            userAnswer[tense] = formatString(userAnswer[tense])
        }
        // Correct Answers
        // Infinitive, Simple, Participle
        for (let i = 0; i < 3; i++) {
            correctAnswer[i] = formatString(correctAnswer[i]);
        }
        // Spanish
        correctAnswer[3] = correctAnswer[3].map(formatString);

        console.log('userAnswer :>> ', userAnswer);
        console.log('correctAnswer :>> ', correctAnswer);

        return userAnswer.infinitive === correctAnswer[0] &&
            userAnswer.simple === correctAnswer[1] &&
            userAnswer.participle === correctAnswer[2] &&
            correctAnswer[3].includes(userAnswer.spanish);
    }


    // Starts the game
    const startGame = () => {
        setIsRunning(true);
        intervaloRef.current = setInterval(() => setTime((time) => time + 1), 1000);
    }

    // Ends the Game
    const endGame = (modalProps) => {

        setModal(modalProps);
        clearInterval(intervaloRef.current);
    }

    const correct = () => {
        //It is correct
        if (compareAnswers(respuesta, [...verbs[position]])) {

            playSound(require('../sound/Correct.wav'));

            setPuntos(puntos + 1);

            if (position === verbs.length - 1) {

                endGame({ show: true, header: "Congratulations, you have won", content: <>Congratulations, you have completed the game with {puntos + 1} points in {formatTime(time)}.</> });
            }

            else {
                setHint(emptyVerbs[position + 1])
                setPosition(position + 1);
            }

            setCorrecting(false);
        }

        //it isn't
        else {
            setVidas(vidas - 1);

            // Play Sound
            playSound(require('../sound/Mistaken.wav'));

            setPuntos(puntos - 1);

            // Fulls the empty verb to help the user to answer correctly

            const correctVerb = [...verbs[position]];

            // Removes all the secondary translations
            correctVerb[3].splice(1);

            setHint(verbs[position]);

            // Chekcs if the game is ovver, because the player has used all the lives
            if (vidas === 1) {
                endGame({ show: true, header: 'GAME OVER', content: <>The game is over, you have got {puntos} points in {formatTime(time)}.</> });
            }

            setCorrecting(true);
        }

        // Ereases the content of the inputs
        setRespuesta(initialAnswers);
    }


    // When the form it is send
    const handleSubmit = (e) => {
        // Avoids sending the data to the user
        e.preventDefault();

        //Checks if the game is started

        if (!isRunning) {
            startGame();
        }
        else {

            correct();
        }
    }

    const playSound = (track) => {

        const audio = new Audio(track);
        audio.play();
    }

    let buttonText = !isRunning ? "Start" : "Validate";
    return <Form onSubmit={handleSubmit}>
        <Container id='Game-Area' fluid>

            <p>Remember, that you must type always the 4 four verbs, including the one given </p>

            <CasillasVerbs verb={hint} handleChangeInput={handleChange} respuesta={respuesta} isRunning={isRunning} correcting={correcting} />

            <div className='text-center'>
                <Button variant="success" type="submit">{buttonText}</Button>
            </div>

            <BarraInfo puntos={puntos} vidasRestantes={vidas} vidasTotales={VIDAS_TOTALES} time={time} />

        </Container>

        <GameModal {...modal} />
    </Form>
}

export default Game;