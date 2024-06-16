import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


// Cada una de las casillas de los verbos
function Casilla(props) {


    return <Col>
        <Form.Group className="mb-3 input-verbo-group focus">
            <Form.Label className="Tiempo-Label">{props.tituloTiempo}</Form.Label>

            <Form.Control size="lg" type="text"
                className="input-verbo"
                name={props.tiempo}
                placeholder={props.verb}
                value={props.answer}
                onChange={props.handleChange}
                disabled={!props.isRunning}
                required={props.isRunning}
                autoComplete="off"
                style={{ borderColor: props.correcting ? "red" : "black" }}
            />
        </Form.Group>
    </Col>
}

Casilla.defaultProps = {
    tiempo: "",
    tituloTiempo: "",
    disabled: false,
    verb: ''
}

export default Casilla
