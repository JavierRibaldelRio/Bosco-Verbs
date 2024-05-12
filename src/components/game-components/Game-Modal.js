// Use Modal from react-Bootstrap : https://react-bootstrap.netlify.app/docs/components/modal/#vertically-centered

// Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Fontawosome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

function GameModal(props) {

    const handleClick = () => { window.location.reload() };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.content}
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"success"} onClick={handleClick}>Play Again <FontAwesomeIcon icon={faRotateRight} /></Button>
            </Modal.Footer>
        </Modal>
    );
}

export default GameModal;