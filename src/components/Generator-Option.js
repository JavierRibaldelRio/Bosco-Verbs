import React from "react";

//Bootstrap
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faEye } from '@fortawesome/free-solid-svg-icons'

function GeneratorOption(props) {

    const generateExamEmpty = () => { props.generateExam(props.number) };
    const generateExamFull = () => { props.generateExam(props.number, true) };

    return <Col className="text-center opcion">


        <h2>{props.texto}</h2>

        <ButtonGroup aria-label={props.ariaLabel}>
            <Button variant="danger" onClick={generateExamEmpty}> <FontAwesomeIcon icon={faFilePdf} /> PDF Test</Button>
            <Button variant="primary" onClick={generateExamFull}>PDF Answer <FontAwesomeIcon icon={faEye} /></Button>
        </ButtonGroup>

    </Col>

}

export default GeneratorOption;