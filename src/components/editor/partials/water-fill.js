import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '../styled'

const ID = 'editor_water-color-fill'

export const WaterFill = props => {
  const { value, onChange } = props
  return (
    <div>
      <Label htmlFor={ ID }>{'Water Color Fill'}</Label>
      <input type={ 'color' } id={ ID } value={ value } onChange={ onChange } />
    </div>
  )
}

/**
 * prop types
 * @type {object}
 */
WaterFill.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default WaterFill
