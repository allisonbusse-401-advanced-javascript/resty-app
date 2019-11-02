import React from 'react';
// import styles from './Header.css';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './History.css';

const History = ({ historyItems }) => {
  const historyElements = historyItems.map(history => (
    <li key={`${history.url}-${history.method}`}>
      <HistoryItem {...history} />
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
  historyItems: PropTypes.array.isRequired
};


export default History;
