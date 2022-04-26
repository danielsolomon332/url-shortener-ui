import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .then((urls) => this.setState( {urls: urls.urls }))
  }

  addNewUrls = (url) => {
    this.setState({
      urls: [...this.state.urls, url]
    })
    postUrls(url)
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1 className='page-title'>URL Shortener</h1>
          <UrlForm addNewUrls={this.addNewUrls} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
