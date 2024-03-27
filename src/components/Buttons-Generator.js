import React from "react";

// React-Bootstrap
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

import GeneratorOption from "./Generator-Option";

// Genera y ofrece opciones para descargar los examenes deveb os irregulares
function ButtonGenerator(props) {

    return <div className="Panel-Botones">
        <Container>
            <Row>
                <GeneratorOption texto="10 Verbs-Test"/>
                <GeneratorOption texto="104 Verbs-Test"/>
            </Row>

            <Row>
                <Col className="text-center">
                <Button variant="success"><FontAwesomeIcon icon={faRotateRight} /> Regenerate Tests</Button>
                </Col>
            </Row>
        </Container>
    </div>
}

export default ButtonGenerator;