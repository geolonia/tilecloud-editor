import React from 'react'
import PropTypes from 'prop-types'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export class Map extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    style: PropTypes.any, // TODO: Flow or custom type checker is needed
  }

  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: 800,
        height: 800,
        latitude: 37.7577,
        longitude: 122.4376,
        zoom: 8,
      },
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

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { viewport } = this.state
    const { style } = this.props
    return (
      <ReactMapGL
        mapStyle={ style }
        { ...viewport }
        onViewportChange={ viewport =>
          this.setState({ ...this.state, viewport })
        }
      />
    )
  }
}

export default Map
