import React from 'react';
import styles from './Header.css';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, handleChange, url, method, body }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="url" placeholder="URL" value={url} onChange={handleChange}></input>
    <div className="radioButtons">
      <label>
              GET
        <input type="radio" name="method" value="get" checked={method === 'get'} onChange={handleChange}></input>
      </label>
      <label>
              POST
        <input type="radio" name="method" value="post" checked={method === 'post'} onChange={handleChange}></input>
      </label>
      <label>
              PUT
        <input type="radio" name="method" value="put" checked={method === 'put'} onChange={handleChange}></input>
      </label>
      <label>
              PATCH
        <input type="radio" name="method" value="patch" checked={method === 'patch'} onChange={handleChange}></input>
      </label>
      <label>
              DELETE
        <input type="radio" name="method" value="delete" checked={method === 'delete'} onChange={handleChange}></input>
      </label>
    </div>
    <textarea name="body" placeholder="Raw JSON Body" value={body} onChange={handleChange}></textarea>
    <button>Go!</button>
  </form>

);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Form;
