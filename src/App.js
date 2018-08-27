import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import mapStyle from './style.json'

// components
import Map from './map'
import Editor from './editor'

class App extends Component {
  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    this.state = {
      style: mapStyle,
    }
  }

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
    const { style } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">{'Welcome to React'}</h1>
        </header>
        <main className={ 'main' }>
          <div className={ 'editor' }>
            <Editor style={ style } onStyleChange={ this.onStyleChange } />
          </div>
          <div className={ 'map-view' }>
            <Map style={ style } />
          </div>
        </main>
        <p className="App-intro">
          {'To get started, edit '}
          <code>{'src/App.js'}</code>
          {' and save to reload.'}
        </p>
      </div>
    )
  }
}

export default App
