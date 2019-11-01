import React from 'react';
// import styles from './Header.css';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ historyItems }) => {
console.log(historyItems)
  const historyElements = historyItems.map(history => (
    <li key={`${history.url}-${history.method}`}>
      <HistoryItem {...history} />
    </li>
  ));
  
  return (
    <ul>
      {historyElements}
    </ul>
  );
};

History.propTypes = {
  historyItems: PropTypes.array.isRequired
}


export default History;
