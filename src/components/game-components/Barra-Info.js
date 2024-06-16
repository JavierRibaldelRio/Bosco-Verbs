import React from "react";

import formatTime from "../../scripts/Format-Time";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LivesMissing from "./Lives";

// Creates a bar where you can see the points that you have got and the lives left
function BarraInfo(props) {

    return <Row id="Marcadores">
        <Col style={{ textAlign: "left" }}>

            <div>Points</div>
            <div>{props.puntos}</div>
        </Col>
        <Col style={{ textAlign: "center" }} className="Cronometro-Label">{formatTime(props.time)}</Col>
        <Col style={{ textAlign: "right" }}><LivesMissing vidas={props.vidasRestantes} vidasTotales={props.vidasTotales} /></Col>
    </Row>
}

BarraInfo.defaultProps = {

    puntos: 0,
    vidas: 3
}

export default BarraInfo;