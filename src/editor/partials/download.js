import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const Download = props => {
  const { style } = props
  return (
    <div>
      <a
        href={ window.URL.createObjectURL(
          new Blob([JSON.stringify(style)], { type: 'application/json' }),
        ) }
        download={ 'style.json' }
      >
        {'download'}
      </a>
    </div>
  )
}

/**
 * prop types
 * @type {object}
 */
Download.propTypes = {
  style: PropTypes.object.isRequired,
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

export default connect(mapStateToProps)(Download)
