import { Button } from "react-bootstrap";

import '../style/Err404.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


function Err404() {

    return <div className="Err404 text-center">

        <h1 id="title-Err404">ERROR 404</h1>

        <h2> ERROR 404: the page was not [To find, Found, <span style={{ textDecoration: 'underline', textDecorationColor: 'green', textDecorationThickness: "5px" }}>Found</span>, Encontrar].</h2>
        <br />
        <a className="btn btn-danger" role="button" href="/"><FontAwesomeIcon icon={faHouse} /> Go to main page</a>

    </div>

}

export default Err404;
