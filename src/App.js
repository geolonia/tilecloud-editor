import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { withStyles } from '@material-ui/core/styles'

import './App.css'

// components
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Map from './components/map'
import Editor from './components/editor'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 600,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

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
    const { classes } = this.props

    return (
      <Provider store={ store }>
        <div className={ classes.root }>
          <Drawer
            variant="permanent"
            classes={ {
              paper: classes.drawerPaper,
            } }
          >
            {/* <AppBar position={ 'absolute' } className={ classes.appBar }>
              <h1 className="App-title">{'TileCloud Editor'}</h1>
            </AppBar> */}

            <div className={ classes.toolbar }>
              <Editor />
            </div>
          </Drawer>
          <main className={ classes.content }>
            <Map />
          </main>
        </div>

        {/* <div className={ classes.root }>
          <Drawer
            classes={ {
              paper: classes.drawerPaper,
            } }
            position={ 'absolute' }
            variant="permanent"
            anchor={ 'left' }
          >
            <AppBar>
              <img src={ logo } className="App-logo" alt="logo" />
              <h1 className="App-title">{'TileCloud Editor'}</h1>
            </AppBar>
          </Drawer>
          <main className={ 'main' }>
          </main>
        </div> */}
      </Provider>
    )
  }
}

export default withStyles(styles)(App)
