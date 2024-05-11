import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


// Cada una de las casillas de los verbos
function Casilla(props) {


    const desactivado = props.verb === undefined;

    const verbo =props.verb;
    console.log(verbo)

    return <Col>
        <Form.Group className="mb-3" >
            <Form.Label className="Tiempo-Label">{props.tituloTiempo}</Form.Label>
            <Form.Control size="lg" type="text" name={props.tiempo}  value={verbo} onChange={props.handleChange} />
        </Form.Group>
    </Col>
}

Casilla.defaultProps={
    tiempo:"",
    tituloTiempo:"",
    disabled: false,
    verb: undefined
}

export default Casilla
