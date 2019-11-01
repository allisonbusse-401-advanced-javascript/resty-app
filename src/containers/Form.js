import React, { Component } from 'react';
import ResultsDisplay from '../components/ResultsDisplay';

export default class Form extends Component {

  state = {
    url: '',
    method: 'get',
    body: '',
    results: {
      headers: '{}',
      response: '{}'
    },
    loading: false
  }

  handleSubmit() {

  }

  handleChange() {

  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="url" placeholder="URL" value={this.state.url} onChange={this.handleChange}></input>
          <div className="radioButtons">
            <label>
              GET
              <input type="radio" value="get" checked={this.state.method === 'get'} onChange={this.handleChange}></input>
            </label>
            <label>
              POST
              <input type="radio" value="post" checked={this.state.method === 'post'} onChange={this.handleChange}></input>
            </label>
            <label>
              PUT
              <input type="radio" value="put" checked={this.state.method === 'put'} onChange={this.handleChange}></input>
            </label>
            <label>
              PATCH
              <input type="radio" value="patch" checked={this.state.method === 'patch'} onChange={this.handleChange}></input>
            </label>
            <label>
              DELETE
              <input type="radio" value="delete" checked={this.state.method === 'delete'} onChange={this.handleChange}></input>
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

  static propTypes = {

  }
}
