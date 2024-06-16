import { Row, Col } from "react-bootstrap";

function About() {


    return <div className="About">
        <h1 id="titulo-seccion">Bosco Verbs</h1>


        <div id="explicacion-about">

            <Row md={2} sm={1}>
                <Col>

                    <h2>English</h2>
                    <br />

                    <div className="intro">

                        Bosco Verbs is a website created in the  <a href="https://valenciasjb.salesianos.edu/" target="blank">Colegio Salesianos San Juan Bosco</a> of Valencia with the target of encouraging the learning of irregular verbs during secondary school.

                        <br /> <br />

                        The site proposes features such as: verb lists, test generators, and even games, to make learning irregular verbs easier.
                    </div>


                </Col>
                <Col>

                    <h2>Español</h2>
                    <br />
                    <div className="intro">

                        Bosco Verbs es una página web creada en el <a href="https://valenciasjb.salesianos.edu/" target="blank">Colegio Salesianos San Juan Bosco</a> de Valencia con el objetivo de fomentar el aprendizaje de los verbos irregulares del inglés durante la educación secundaria.

                        <br /> <br />

                        La página propone herramientas como listas de verbos, generadores de exámenes y hasta juegos, para facilitar el aprendizaje de los verbos.

                    </div>
                </Col>
            </Row>
        </div>

        <Row id="iconos-about" className="align-items-center text-center">

            <Col><a href="https://valenciasjb.salesianos.edu/" target="_blank"> <img src="cabecera-colegio.jpg" alt="Logotipo Colegio Salesianos San Juan Bosco Valencia" /></a></Col>


            <Col>Curso 2023-24</Col>

            <Col><img alt="Logotipo del departamento de lenguas extranjeras"></img></Col>

        </Row>

    </div>



}

export default About;