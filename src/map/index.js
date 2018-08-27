import React from 'react'
import { connect } from 'react-redux'
import { createActions as createMapActions } from '../reducers/map'
import PropTypes from 'prop-types'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export class Map extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    viewport: PropTypes.any.isRequired,
    style: PropTypes.any.isRequired, // TODO: Flow or custom type checker is needed
    setViewport: PropTypes.func.isRequired,
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

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { viewport, style, setViewport } = this.props
    return (
      <ReactMapGL
        mapStyle={ style }
        width={ 800 }
        height={ 800 }
        { ...viewport }
        onViewportChange={ setViewport }
      />
    )
  }
}

/**
 * map state to props
 * @param  {object} state    state tree
 * @param  {object} ownProps own props
 * @return {object}          state props
 */
const mapStateToProps = state => {
  return {
    viewport: state.map.viewport,
    style: state.style.data,
  }
}

/**
 * map dispatch to props
 * @param  {function} dispatch dispatcher
 * @param  {object}   ownProps own props
 * @return {object}            dispatch props
 */
const mapDispatchToProps = dispatch => {
  return {
    setViewport: viewport => dispatch(createMapActions.setViewport(viewport)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map)
