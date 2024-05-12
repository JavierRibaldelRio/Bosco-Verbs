import React, { useState } from "react";

// React-Bootstrap
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

// Functions
import shuffleVerbs from '../scripts/Shuffle-Verbs.js';
import createGaps from "../scripts/Create-Gaps.js";

// PDF
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Verbs, with the spanish translation as an string
import IrregularVerbs from "../data/Irregular-Verbs-String.json";
import GeneratorOption from "./Generator-Option";

// CSS 
import '../style/Button-Regenerate.css';

// Genera y ofrece opciones para descargar los examenes de verbos irregulares
function ButtonGenerator(props) {
    //Almacena las lista de verbos
    const [lista, setLista] = useState(shuffleVerbs(IrregularVerbs));

    const [active, setActive] = useState(false)


    const generateExam = (numberVerbs, answers) => {

        const fileName = "Irregular-Verbs-" + numberVerbs + (answers ? "-answers" : "") + ".pdf";
        let content = lista.slice(0, numberVerbs);

        if (!answers) {

            content = createGaps(content);
        }

        // Genera el PDF
        const doc = new jsPDF();

        const HEADER = [["INFINITIVE", "PAST", "PAST PARTICIPLE", "SPANISH TRANSLATION"]];
        doc.autoTable({

            theme: "grid",
            head: HEADER,
            body: content
        });

        doc.save(fileName);

    }

    const handleClickRegenerate = () => {
        setLista(shuffleVerbs(IrregularVerbs))
        setActive(true);

        setTimeout(() => setActive(false), 1200);
    };

    return <div className="Panel-Botones">
        <Container>
            <Row>
                <GeneratorOption generateExam={generateExam} number={10} texto="10 Verbs-Test" />
                <GeneratorOption generateExam={generateExam} number={104} texto="104 Verbs-Test" />
            </Row>

            <Row>
                <Col className="text-center">
                    <Button id="Button-Regenerate" variant="outline-success" className={active ? "transition" : ""} onClick={handleClickRegenerate} ><FontAwesomeIcon icon={faRotateRight} /> Regenerate Tests</Button>
                </Col>
            </Row>
        </Container>
    </div >
}

export default ButtonGenerator;