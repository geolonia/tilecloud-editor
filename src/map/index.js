import React from 'react'
import { connect } from 'react-redux'
import { createActions as createMapActions } from '../reducers/map'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
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
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    this.state = {
      map: void 0,
    }
  }

  /**
   * componentDidMount
   * @return {void}
   */
  componentDidMount() {
    const { style, viewport } = this.props
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: { ...style, ...viewport },
      localIdeographFontFamily: ['sans-serif'],
      attributionControl: true,
      hash: true,
    })
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ ...this.state, map })
  }

  /**
   * componentWillReceiveProps
   * @param  {object} nextProps React props.
   * @return {void}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.state.map && this.state.map.setStyle(nextProps.style)
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
    return (
      <div
        className={ 'map-container' }
        style={ { width: '100%', height: 400 } }
        ref={ el => (this.mapContainer = el) }
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
