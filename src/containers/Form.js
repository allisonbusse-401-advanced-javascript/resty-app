import React, { Component } from 'react';
import ResultsDisplay from '../components/ResultsDisplay';
import { callApi } from '../services/callApi';

export default class Form extends Component {

  state = {
    url: '',
    method: 'get',
    body: '',
    headers: {
      'Content-Type': 'application/json'
    },
    results: {
      headers: {},
      response: {}
    },
    loading: false
  }

  handleSubmit = event => {
    console.log(this.state.url, this.state.method, this.state.headers, this.state.body)
    event.preventDefault();
    this.setState({ loading: true })
    callApi(this.state.url, this.state.method, this.state.headers, this.state.body)
    .then(results => {
      console.log(results)
      this.setState({results, loading: false})}
      )
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="url" placeholder="URL" value={this.state.url} onChange={this.handleChange}></input>
          <div className="radioButtons">
            <label>
              GET
              <input type="radio" name="method" value="get" checked={this.state.method === 'get'} onChange={this.handleChange}></input>
            </label>
            <label>
              POST
              <input type="radio" name="method" value="post" checked={this.state.method === 'post'} onChange={this.handleChange}></input>
            </label>
            <label>
              PUT
              <input type="radio" name="method" value="put" checked={this.state.method === 'put'} onChange={this.handleChange}></input>
            </label>
            <label>
              PATCH
              <input type="radio" name="method" value="patch" checked={this.state.method === 'patch'} onChange={this.handleChange}></input>
            </label>
            <label>
              DELETE
              <input type="radio" name="method" value="delete" checked={this.state.method === 'delete'} onChange={this.handleChange}></input>
            </label>
          </div>
          <textarea name="body" placeholder="Raw JSON Body" value={this.state.body} onChange={this.handleChange}></textarea>
          <button>Go!</button>
        </form>

        <ResultsDisplay
          headers={this.state.results.headers}
          response={this.state.results.response}
        />
      </>
    );
  }
}
