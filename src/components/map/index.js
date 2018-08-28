import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export class Map extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    style: PropTypes.any.isRequired, // TODO: Flow or custom type checker is needed
    onViewportChange: PropTypes.func,
  }

  /**
   * defaultProps
   * @type {object}
   */
  static defaultProps = {
    onViewportChange: x => x, // noop,
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
    const { style } = this.props
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: { ...style },
      localIdeographFontFamily: ['sans-serif'],
      attributionControl: true,
      hash: true,
    })

    // TODO: set viewport change handlers here

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
        style={ { width: '100%', height: '100%' } }
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
    style: state.style.data,
  }
}

export default connect(mapStateToProps)(Map)
