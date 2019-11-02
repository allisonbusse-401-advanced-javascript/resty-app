import React from 'react';
// import styles from './Header.css';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method }) => (

  <div>
    <h2>{method}</h2>
    <p>{url}</p>
  </div>

);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};


export default HistoryItem;
