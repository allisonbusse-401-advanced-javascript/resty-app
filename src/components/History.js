import React from 'react';
// import styles from './Header.css';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './History.css';

const History = ({ handleHistoryClick, historyItems }) => {
  const historyElements = historyItems.map((history, index) => (
    <li key={`${index}-${history.url}-${history.method}`}>
      <HistoryItem handleHistoryClick={handleHistoryClick} {...history}/>
    </li>
  ));

  return (
    <div className={styles.History}>
      <h2>History</h2>
      <ul>
        {historyElements}
      </ul>
    </div>
  );
};

History.propTypes = {
  historyItems: PropTypes.array.isRequired,
  handleHistoryClick: PropTypes.func.isRequired
};


export default History;
