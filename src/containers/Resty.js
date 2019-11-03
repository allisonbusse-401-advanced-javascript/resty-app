import React, { Component } from 'react';
import ResultsDisplay from '../components/ResultsDisplay';
import Form from '../components/Form';
// import HeaderForm from '../components/HeaderForm';
import History from '../components/History';
import { callApi } from '../services/callApi';
import styles from './Resty.css';
// import store from '../services/store';
//need to find a way to convert to base 64

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
    storeKey: '',
    authUsername: '',
    authPassword: '',
    authToken: ''
  }


  handleSubmit = event => {
    event.preventDefault();

    const historyObj = {
      url: this.state.url,
      method: this.state.method,
      headers: this.state.headers,
      results: this.state.results
      // authUsername: this.autUsername
    };

    this.setState({ loading: true });
    callApi(this.state.url, this.state.method, this.state.headers, this.state.body)
      .then(results => {
        this.setState(state => ({ results, loading: false, history: [historyObj, ...state.history] }));
      });
  }


  handleHeaderSubmit = event => {
    event.preventDefault();

    const authKey = 'Authorization';

    if(this.authToken !== '') {
      this.setState({ headers: {
        [authKey]: `Bearer ${this.state.authToken}`
      }
      });
    }

    if(this.authUsername !== '' && this.authPassword !== '') {
      this.setState({ headers: {
        //need to find a way to encode into base 64
        [authKey]: `Basic ${base64.encode(`${this.state.authUsername}:${this.state.authPassword}`)}`
      } 
      });
    }
  }



  handleHistoryClick = (url, method, headers, results) => {
    console.log(url, method, headers, results)
    this.setState({ url, method, headers, results });
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

    // const headerFormObj = {
    //   handleHeaderSubmit: this.handleHeaderSubmit,
    //   handleChange: this.handleChange,
    //   authUsername:  this.AuthUsername,
    //   authPassword: this.AuthPassword,
    //   authToken: this.AuthToken,
    // };
    
    return (
      <div className={styles.Resty}>
        <History handleHistoryClick={this.handleHistoryClick} historyItems={this.state.history}/>
        <div>
          {/* <HeaderForm {...headerFormObj} /> */}
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
