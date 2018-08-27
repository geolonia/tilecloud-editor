import React from 'react'
import PropTypes from 'prop-types'

export const WaterFill = props => {
  const { value, onChange } = props
  return (
    <div>
      <label htmlFor="editor_water-color-fill">{'Water Color Fill'}</label>
      <input
        type="color"
        id={ 'editor_water-color-fill' }
        value={ value }
        onChange={ onChange }
      />
    </div>
  )
}

WaterFill.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default WaterFill
