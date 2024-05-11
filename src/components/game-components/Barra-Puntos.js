import React from "react";

import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";

// Creates a bar where you can see the points that you have got and the lives left
function BarraPuntos(props){
    return <Row id="Marcadores">
        <Col style={{textAlign: "left"}}>Points: {props.puntos}</Col>
        <Col style={{textAlign: "center"}}>Verbs tried: {props.position}</Col>
        <Col style={{textAlign: "right"}}>Lives left: {props.vidas}</Col>
    </Row>
}

BarraPuntos.defaultProps = {

    puntos: 0,
    vidas: 3
}

export default BarraPuntos;