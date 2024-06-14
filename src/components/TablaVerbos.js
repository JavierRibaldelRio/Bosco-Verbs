import React from "react";
import '../style/table.css'

// Shows a table with all the irregular verbs
function TablaVerbos(props) {

    // Stores the content of the table
    const tableContent = props.irregularVerbs
        .map((x, i) => {
            return <tr key={i}>
                <td scope="row">{i + 1}</td>
                <td>{x[0]}</td>
                <td>{x[1]}</td>
                <td>{x[2]}</td>
                <td>{x[3]}</td>
            </tr>
        });

    return <table id="Tabla-IV" className="table-striped table">
        <thead className="table-dark">
            <tr>
                <th scope="col" >Nº</th>
                <th scope="col" >Infinitive</th>
                <th scope="col" >Past Simple</th>
                <th scope="col" >Past Participle</th>
                <th scope="col" >Spanish Translation</th>
            </tr>
        </thead>

        <tbody>
            {tableContent}
        </tbody>


    </table>;
}

export default TablaVerbos;