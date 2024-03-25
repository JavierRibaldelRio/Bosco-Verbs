import React from "react";
import '../style/table.css'

// Shows a table with all the irregular verbs
function TablaVerbos(props) {

    // Stores the content of the table
    const tableContent = props.irregularVerbs
        .map((x, i) => {
            return <tr>
                <td>{i + 1}</td>
                <td>{x[0]}</td>
                <td>{x[1]}</td>
                <td>{x[2]}</td>
                <td>{x[3]}</td>
            </tr>
        });

    return <table id="Tabla-IV">
        <thead>
            <tr>
                <th>Nº</th>
                <th>Infinitive</th>
                <th>Past Simple</th>
                <th>Past Participle</th>
                <th>Spanish Translation</th>
            </tr>
        </thead>

        <tbody>
            {tableContent}
        </tbody>


    </table>;
}

export default TablaVerbos;