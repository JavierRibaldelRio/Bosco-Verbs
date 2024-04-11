import React from "react";
import IrregularVerbs from "../data/Irregular-Verbs-String.json";
import TablaVerbos from "../components/TablaVerbos";

function VerbsList(props){


    return <div>
            <h1 id="titulo-seccion">Irregular Verbs List</h1>

            <TablaVerbos irregularVerbs={IrregularVerbs}/>
            

        </div>  


}

export default VerbsList