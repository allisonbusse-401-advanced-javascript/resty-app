import React from 'react';
// import styles from './Header.css';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method, storeKey, onHistoryClick }) => (

  <button onClick={onHistoryClick} storekey={storeKey}>
    <h2>{method}</h2>
    <p>{url}</p>
  </button>

);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  storeKey: PropTypes.string.isRequired,
  onHistoryClick: PropTypes.func.isRequired
};


export default HistoryItem;
