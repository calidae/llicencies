import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Question from './components/Question'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Question 
            number="1"
            title="¿Se puede compartir mi software?"
            options={[
              { label: 'label1', value: 'value1' },
              { label: 'label2', value: 'value2' },
            ]}
          />
      </div>
    );
  }
}
