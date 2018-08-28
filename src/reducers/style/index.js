import update from 'immutability-helper'
import defaultStyle from './style.json'

/**
 * initial style state
 * @type {object}
 */
const initialState = {
  data: defaultStyle, // NOTE: example default style
}

const SET_VIEWPORT = 'STYLE.SET_VIEPORT'
const SET_WATER_FILL_COLOR = 'STYLE.SET_WATER_FILL_COLOR'

/**
 * Actions
 * @type {object}
 */
export const ACTIONS = {
  SET_VIEWPORT,
  SET_WATER_FILL_COLOR,
}

/**
 * action creators
 * @type {object}
 */
export const createActions = {
  /**
   * create set viewport action
   * @param {boject} center latlng object
   * @param {number} zoom   zoom number
   */
  setViewport: (center, zoom) => ({
    type: SET_VIEWPORT,
    payload: { center, zoom },
  }),
  /**
   * create set water fill action
   * @param {string} color next water color
   */
  setWaterFillColor: color => ({
    type: SET_WATER_FILL_COLOR,
    payload: { color },
  }),
}

/**
 * style reducer
 * @param  {object} [state=initialState] prev state
 * @param  {object} action               action
 * @return {object}                      next state
 */
export const reducer = (state = initialState, action) => {
  const { type } = action
  if (type === SET_VIEWPORT) {
    const { zoom, center } = action.payload
    return update(state, {
      data: {
        center: { $set: { center } },
        zoom: { $set: { zoom } },
      },
    })
  }
  if (type === SET_WATER_FILL_COLOR) {
    const { color } = action.payload
    const index = state.data.layers.map(layer => layer.id).indexOf('water')
    return update(state, {
      data: {
        layers: {
          [index]: {
            paint: {
              'fill-color': { $set: color },
            },
          },
        },
      },
    })
  } else {
    return state
  }
}

export default reducer
