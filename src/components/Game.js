// Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// React
import { useState, useEffect } from 'react';

// Components
import CasillasVerbs from './game-components/Casillas-Verbs';
import BarraPuntos from './game-components/Barra-Puntos';

// Functions
import shuffleVerbs from '../scripts/Shuffle-Verbs';
import createGaps from '../scripts/Create-Gaps';


// CSS
import '../style/Game.css';

// JSON
import IrregularVerbs from "../data/Irregular-Verbs.json";


const initialAnswers = {

    infinitive:'dgdf',
    simple:'',
    participle:'afd',
    spanish:''
}

function Game(props) {
    // Creates de variables to store points and lives
    const [puntos, setPuntos] = useState(0);
    const [vidas, setVidas] = useState(3);

    // The number of verbs that are done, and the verbs
    const [position, setPosition]=useState(0);
    const [verbs, setVerbs]=useState(shuffleVerbs(IrregularVerbs));
    const [emptyVerb, setEmptyVerbs]=useState(createGaps(verbs));

    const [respuesta, setRespuesta]=useState(initialAnswers)

    // Elimina una vida del contador de vidas
    const perderVida = () => setVidas(vidas-1);


    const handleChange = (e) =>{

        setRespuesta({...respuesta,[e.target.name]:e.target.value});
        
        console.log(respuesta);
    }

   

    // When the form it is send
    const handleSubmit = (e) =>{
        // Avoids sending the data to the user
        e.preventDefault();

        const newVerb = {};
        

        setRespuesta(emptyVerb[position +1])
        setPosition(position +1);
    }

    return <Form onSubmit={handleSubmit}>
        <Container id='Game-Area' fluid>

            <CasillasVerbs verb={emptyVerb[position]} handleChangeInput={handleChange} respuesta={respuesta}/>

            <div className='text-center'>
                <Button variant="primary" type="submit">Correct</Button>
            </div>

            <BarraPuntos puntos={puntos} vidas={vidas} position={position} />

        </Container>

        

    </Form>
}

export default Game;