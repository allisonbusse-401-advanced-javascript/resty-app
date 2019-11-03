import React from 'react';
// import styles from './Header.css';
import PropTypes from 'prop-types';

const HistoryItem = ({ handleHistoryClick, url, method, headers, results }) => (
  <div onClick={() => handleHistoryClick(url, method, headers, results)}>
    <h2>{method}</h2>
    <p>{url}</p>
  </div>

);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  headers: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
  handleHistoryClick: PropTypes.func.isRequired
};


export default HistoryItem;
