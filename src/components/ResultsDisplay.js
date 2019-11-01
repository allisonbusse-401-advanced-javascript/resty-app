import React from 'react';
import styles from './ResultsDisplay.css';
import PropTypes from 'prop-types';


const ResultsDisplay = ({ headers, response }) => (

  <div>
    <span>"Headers" : {headers}</span>
    <span>"Response" : {response}</span>
  </div>
);

ResultsDisplay.propTypes = {
  headers: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired
};



export default ResultsDisplay;
