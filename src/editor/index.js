import React from 'react'
import { connect } from 'react-redux'
import { createActions as createStyleActions } from '../reducers/style'
import PropTypes from 'prop-types'

import { ControlForms } from './styled'
import WaterFill from './partials/water-fill'
import Download from './partials/download'

export class Editor extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    style: PropTypes.any.isRequired,
    setWaterFillColor: PropTypes.func.isRequired,
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
    const { style, setWaterFillColor } = this.props
    const waterLayer = style.layers.find(layer => layer.id === 'water')

    return (
      <ControlForms>
        <WaterFill
          value={ waterLayer.paint['fill-color'] }
          onChange={ setWaterFillColor }
        />
        <Download />
      </ControlForms>
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

/**
 * map dispatch to props
 * @param  {function} dispatch dispatcher
 * @param  {object}   ownProps own props
 * @return {object}            dispatch props
 */
const mapDispatchToProps = dispatch => {
  return {
    setWaterFillColor: e =>
      dispatch(createStyleActions.setWaterFillColor(e.target.value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor)
