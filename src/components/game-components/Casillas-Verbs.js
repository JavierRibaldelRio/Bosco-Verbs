import Row from 'react-bootstrap/Row';
import Casilla from './Casilla';
import { useEffect } from 'react';

function CasillasVerbs(props) {

    useEffect(() => {

        console.log(props.verb)
    })

    const {infinitive, simple, participle, spanish} = props.respuesta;

    return <Row xs={1} md={4}>

        <Casilla verb={infinitive} tiempo="infinitive" tituloTiempo="Infinitive" handleChange={props.handleChangeInput} />
        <Casilla verb={simple} tiempo="simple" tituloTiempo="Past Simple" handleChange={props.handleChangeInput} />
        <Casilla verb={participle} tiempo="participle" tituloTiempo="Past Participle" handleChange={props.handleChangeInput} />
        <Casilla verb={spanish} tiempo="spanish" tituloTiempo="Translation" handleChange={props.handleChangeInput} />

    </Row>
}

CasillasVerbs.defaultProps = {
    verb: ''
}

export default CasillasVerbs;