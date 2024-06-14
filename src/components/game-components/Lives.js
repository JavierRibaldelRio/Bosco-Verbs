import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons';

function LivesMissing(props) {
    // stores the hearts to be displayed
    const hearts = [];

    for (let i = 0; i < props.vidas; i++) {
        hearts.push(<RegularHeart />);
    }

    for (let i = 0; i < props.vidasTotales - props.vidas; i++) {
        hearts.push(<BrokenHeart />);
    }

    return <>

        <div>Lives left</div>
        <div>
            {hearts}

        </div>


    </>
}


// Hearts

function RegularHeart() {
    return <><FontAwesomeIcon style={{ color: '#ff0000' }} icon={faHeart} /> </>;
}

function BrokenHeart() {
    return <><FontAwesomeIcon style={{ color: '#666666' }} icon={faHeartCrack} /> </>
}


export default LivesMissing;