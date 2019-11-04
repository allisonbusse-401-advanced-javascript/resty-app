import React from 'react';
import styles from './Form.css';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, handleChange, url, method, body }) => (
  <form className={styles.Form} onSubmit={handleSubmit}>
    <input type="text" name="url" placeholder="URL" value={url} onChange={handleChange}></input>
    <div className="radioButtons">
      <input type="radio" id="get" name="method" value="get" checked={method === 'get'} onChange={handleChange}></input>
      <label htmlFor="get">
        GET</label>

      <input type="radio" id="post" name="method" value="post" checked={method === 'post'} onChange={handleChange}></input>
      <label htmlFor="post">
        POST</label>

      <input type="radio" id="put" name="method" value="put" checked={method === 'put'} onChange={handleChange}></input>
      <label htmlFor="put">
        PUT</label>
      <input type="radio" name="method" id="patch" value="patch" checked={method === 'patch'} onChange={handleChange}></input>
      <label htmlFor="patch">
        PATCH</label>

      <input type="radio" id="delete" name="method" value="delete" checked={method === 'delete'} onChange={handleChange}></input>
      <label htmlFor="delete">
        DELETE</label>
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
  body: PropTypes.string.isRequired,
};

export default Form;
