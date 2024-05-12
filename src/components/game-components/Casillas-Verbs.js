import Row from 'react-bootstrap/Row';
import Casilla from './Casilla';
import { useEffect } from 'react';

function CasillasVerbs(props) {

    return <Row xs={1} md={4}>

        <Casilla answer={props.respuesta.infinitive} verb={props.verb[0]} tiempo="infinitive" tituloTiempo="Infinitive" handleChange={props.handleChangeInput} isRunning={props.isRunning} />
        <Casilla answer={props.respuesta.simple} verb={props.verb[1]} tiempo="simple" tituloTiempo="Past Simple" handleChange={props.handleChangeInput} isRunning={props.isRunning} />
        <Casilla answer={props.respuesta.participle} verb={props.verb[2]} tiempo="participle" tituloTiempo="Past Participle" handleChange={props.handleChangeInput} isRunning={props.isRunning} />
        <Casilla answer={props.respuesta.spanish} verb={props.verb[3]} tiempo="spanish" tituloTiempo="Translation" handleChange={props.handleChangeInput} isRunning={props.isRunning} />

    </Row>
}

CasillasVerbs.defaultProps = {
}

export default CasillasVerbs;