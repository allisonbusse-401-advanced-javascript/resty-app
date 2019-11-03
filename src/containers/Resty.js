import React, { Component } from 'react';
import ResultsDisplay from '../components/ResultsDisplay';
import Form from '../components/Form';
import History from '../components/History';
import { callApi } from '../services/callApi';
import styles from './Resty.css';
import store from '../services/store';

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
    history: [],
    storeKey: ''
  }


  handleSubmit = event => {
    event.preventDefault();

    const historyObj = {
      url: this.state.url,
      method: this.state.method,
      storeKey: this.state.storeKey,
    };

    this.setState({ loading: true });
    callApi(this.state.url, this.state.method, this.state.headers, this.state.body)
      .then(results => {
        this.setState(state => ({ results, loading: false, history: [historyObj, ...state.history] }));
      });
  }



  historyClick = (event) => {
    console.log(event)
    // this.setState({ key: event.key });
    // const storeObj = store.get(this.state.key);
    // this.setState({ 
    //   url: storeObj.url,
    //   method: storeObj.method,
    //   headers: storeObj.headers,
    //   body: storeObj.body
    // });
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
      body: this.state.body,
    };
    
    return (
      <div className={styles.Resty}>
        <History historyItems={this.state.history} onHistoryClick={this.historyClick}/>
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
