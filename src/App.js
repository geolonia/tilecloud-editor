import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import logo from './logo.svg'
import './App.css'

// components
import Map from './map'
import Editor from './editor'

class App extends Component {
  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return true
  }

  onStyleChange = nextStyle =>
    this.setState({ ...this.state, style: nextStyle })

  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h1 className="App-title">{'TileCloud Editor'}</h1>
          </header>
          <main className={ 'main' }>
            <Editor />
            <Map />
          </main>
        </div>
      </Provider>
    )
  }
}

export default App
