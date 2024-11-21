//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';

import "./icons.js";
import 'bootstrap';
import '../styles/index.css';

// include your styles into the webpack bundle


//import your own components
function SimpleCounter(props){
    return (
        <div className="fondoClock">
            <div className="clock">
                <i clasname="far fa-clock"></i>
            </div>
            <div className="six">{props.digitSix % 10}</div>
            <div className="five">{props.digitFive % 10}</div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    )
}

SimpleCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number,
};

let contador = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval (function() {
    const six = Math.floor(contador/100000);
    const five = Math.floor(contador/10000);
    const four = Math.floor(contador/1000);
    const three = Math.floor(contador/100);
    const two = Math.floor(contador/10);
    const one = Math.floor(contador/1);
    contador++;
    
    root.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />
    );
},1000);





