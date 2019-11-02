import React, { Component } from 'react';
import ResultsDisplay from '../components/ResultsDisplay';
import Form from '../components/Form';
import History from '../components/History';
import { callApi } from '../services/callApi';
import styles from './Resty.css';

export default class Resty extends Component {

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
    loading: false,
    history: []
  }

  handleSubmit = event => {
    event.preventDefault();

    const historyObj = {
      url: this.state.url,
      method: this.state.method
    };


    this.setState({ loading: true });
    callApi(this.state.url, this.state.method, this.state.headers, this.state.body)
      .then(results => {
        this.setState(state => ({ results, loading: false, history: [historyObj, ...state.history] }));
      });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {

    const formObject = {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      url: this.state.url,
      method: this.state.method,
      body: this.state.body
    };

    return (
      <div className={styles.Resty}>
        <History historyItems={this.state.history} />
        <div>
          <Form {...formObject} />
          <ResultsDisplay
            headers={this.state.results.headers}
            response={this.state.results.response}
          />
        </div>
      </div>
    );
  }
}
