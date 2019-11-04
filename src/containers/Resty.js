import React, { Component } from 'react';
import ResultsDisplay from '../components/ResultsDisplay';
import Form from '../components/Form';
import HeaderForm from '../components/HeaderForm';
import History from '../components/History';
import { callApi } from '../services/callApi';
import styles from './Resty.css';
import store from '../services/store';
import base64 from 'react-native-base64';


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
    
    this.setState({ loading: true });
    callApi(this.state.url, this.state.method, this.state.headers, this.state.body)
      .then(results => {
        this.setState({ results });
      })
      .then(()=> {

        const historyObj = {
          url: this.state.url,
          method: this.state.method,
          headers: this.state.headers,
          results: this.state.results
        };

        this.setState(state => ({ loading: false, history: [historyObj, ...state.history] }));
      })
      .then(() => {
        store.save('history', this.state.history);
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
        [authKey]: `Basic ${base64.encode(`${this.state.authUsername}:${this.state.authPassword}`)}`
      } 
      });
    }
  }

  componentDidMount() {
    const history = store.get('history');
    this.setState(history);
  }

  handleHistoryClick = (url, method, headers, results) => {
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

    const headerFormObj = {
      handleHeaderSubmit: this.handleHeaderSubmit,
      handleChange: this.handleChange,
      authUsername:  this.AuthUsername,
      authPassword: this.AuthPassword,
      authToken: this.AuthToken,
    };
    
    return (
      <div className={styles.Resty}>
        <History handleHistoryClick={this.handleHistoryClick} historyItems={this.state.history}/>
        <div>
          <HeaderForm {...headerFormObj} />
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
