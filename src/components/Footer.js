// Footer of the wwebsite: https://getbootstrap.com/docs/5.3/examples/footers/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser, faFileLines } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top">
            <p className="col-md-4 mb-1 text-body-secondary">© 2024 <a href="https://valenciasjb.salesianos.edu/" target="_blank">Salesianos San Juan Bosco Valencia</a></p>


            <ul className="nav col-md-4  justify-content-end">
                <li className="nav-item"><a href="https://github.com/JavierRibaldelRio/Irregular-Verbs-Test-Tool#" className="nav-link px-2 text-body-secondary">Source Code <FontAwesomeIcon icon={faGithub} /> </a></li>
                <li className="nav-item"><a href="https://github.com/JavierRibaldelRio/Irregular-Verbs-Test-Tool/issues" className="nav-link px-2 text-body-secondary">Issues <FontAwesomeIcon icon={faFileLines} /></a></li>
                <li className="nav-item"><a href="https://github.com/JavierRibaldelRio/" className="nav-link px-2 text-body-secondary">Author <FontAwesomeIcon icon={faUser} /></a></li>

            </ul>
        </footer>
    </div>;
}

export default Footer;