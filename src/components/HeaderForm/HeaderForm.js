import React from 'react';
import PropTypes from 'prop-types';

const HeaderForm = ({ handleHeaderSubmit, handleChange, authUsername, authPassword, authToken }) => (
  <form onSubmit={handleHeaderSubmit}>
    <button>Headers</button>
    <div>
      <h2>Basic Authorization</h2>
      <input type="text" name="authUsername" placeholder="Username" value={authUsername} onChange={handleChange}></input>
      <input type="password" name="authPassword" placeholder="Password" value={authPassword} onChange={handleChange}></input>
    </div>
    <div>
      <h2>Bearer Token</h2>
      <input type="text" name="authToken" placeholder="Bearer Token" value={authToken} onChange={handleChange}></input>
    </div>
  </form>
);


HeaderForm.propTypes = {
  handleHeaderSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  authUsername:  PropTypes.string,
  authPassword: PropTypes.string,
  authToken: PropTypes.string,
};

export default HeaderForm;
