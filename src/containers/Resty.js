import React, { Component } from 'react';
import ResultsDisplay from '../components/ResultsDisplay/ResultsDisplay';
import Form from '../components/Form/Form';
import HeaderForm from '../components/HeaderForm/HeaderForm';
import History from '../components/History/History';
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
          results: this.state.results,
        };

        this.setState(state => ({ 
          history: [historyObj, ...state.history],
        })
        );
      })
      .then(() => {
        store.save('history', this.state.history);
        this.setState({
          loading: false, 
          authUsername: '', 
          authPassword: '', 
          authToken: '',
          headers: {
            'Content-Type': 'application/json'
          } 
        });
      });
  }


  handleHeaderSubmit = event => {
    event.preventDefault();

    if(this.state.authToken !== '') {
      this.setState({ headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.authToken}`
      }
      });
    }

    if(this.state.authUsername !== '' && this.state.authPassword !== '') {
      this.setState({ headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${this.state.authUsername}:${this.state.authPassword}`)}`
      } 
      });
    }
  }

  componentDidMount() {
    const history = store.get('history');
    this.setState({ history });
  }

  handleHistoryClick = (url, method, headers, results) => {
    this.setState({ url, method, headers, results });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }


  render() {
    if(this.state.loading) return <img src="https://media.giphy.com/media/l3nWhI38IWDofyDrW/giphy.gif" alt="Loading Image"/>;

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
          <Form {...formObject} />
          <HeaderForm {...headerFormObj} />
          <ResultsDisplay
            headers={this.state.results.headers}
            response={this.state.results.response}
          />
        </div>
      </div>
    );
  }
}
