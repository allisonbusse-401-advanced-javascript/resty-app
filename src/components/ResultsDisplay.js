/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './ResultsDisplay.css';
import PropTypes from 'prop-types';


const ResultsDisplay = ({ headers, response }) => (

  <div>
    <pre>"Headers" : {JSON.stringify(headers, null, 2)}</pre>
    <pre>"Response" : {JSON.stringify(response, null, 2)}</pre>
  </div>
);

ResultsDisplay.propTypes = {
  headers: PropTypes.object.isRequired,
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};



export default ResultsDisplay;
