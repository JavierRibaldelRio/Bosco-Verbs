import React from "react";

import IrregularVerbs from "../data/Irregular-Verbs-String.json";
import TablaVerbos from "../components/TablaVerbos";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/esm/Button";


function VerbsList() {

    return <div>
        <h1 id="titulo-seccion">Irregular Verbs List</h1>

        <TablaVerbos irregularVerbs={IrregularVerbs} />

        {/* OJO: Falta añadir el enlace a la lista */}


        <div className="text-center download-button">
            <a className="unformated-a" href="/Irregular-Verbs-List.pdf" target="blank" download={true}><Button><FontAwesomeIcon icon={faArrowDown} /> Download List</Button></a>
        </div>


    </div >


}

export default VerbsList