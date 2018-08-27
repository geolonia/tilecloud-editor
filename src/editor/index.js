import React from 'react'
import PropTypes from 'prop-types'

import WaterFill from './partials/water-fill'

export class Editor extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    style: PropTypes.any.isRequired,
    onStyleChange: PropTypes.func.isRequired,
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

  onChangeWaterColor = e => {
    const nextWaterFillColor = e.target.value
    const nextLayers = this.props.style.layers.map(layer => {
      if (layer.id === 'water') {
        const nextPaint = { ...layer.paint, 'fill-color': nextWaterFillColor }
        return { ...layer, paint: nextPaint }
      } else {
        return layer
      }
    })

    const nextStyle = {
      ...this.props.style,
      layers: nextLayers,
    }
    this.props.onStyleChange(nextStyle)
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { style } = this.props
    const waterLayer = style.layers.find(layer => layer.id === 'water')

    return (
      <form>
        <WaterFill
          value={ waterLayer.paint['fill-color'] }
          onChange={ this.onChangeWaterColor }
        />
      </form>
    )
  }
}

export default Editor
