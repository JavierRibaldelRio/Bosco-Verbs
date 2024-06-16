import React from "react";
import '../style/table.css'

import { Table } from "react-bootstrap";

// Shows a table with all the irregular verbs
function TablaVerbos(props) {

    // Stores the content of the table
    const tableContent = props.irregularVerbs
        .map((x, i) => {
            return <tr key={i}>
                <td scope="row" className="numero">{i + 1}</td>
                <td>{x[0]}</td>
                <td>{x[1]}</td>
                <td>{x[2]}</td>
                <td>{x[3]}</td>
            </tr>
        });

    return <Table id="Tabla-IV" striped responsive="lg">
        <thead className="table-success">
            <tr className="table-header">
                <th scope="col" className="numero">Nº</th>
                <th scope="col">Infinitive</th>
                <th scope="col">Past Simple</th>
                <th scope="col">Past Participle</th>
                <th scope="col">Spanish Translation</th>
            </tr>
        </thead>

        <tbody>
            {tableContent}
        </tbody>


    </Table>;
}

export default TablaVerbos;