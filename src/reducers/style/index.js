import update from 'immutability-helper'
import defaultStyle from './style.json'

const initialState = {
  data: defaultStyle,
}

const SET_VIEWPORT = 'STYLE.SET_VIEPORT'
const SET_WATER_FILL_COLOR = 'STYLE.SET_WATER_FILL_COLOR'

export const ACTIONS = {
  SET_VIEWPORT,
  SET_WATER_FILL_COLOR,
}

export const createActions = {
  setViewport: (center, zoom) => ({
    type: SET_VIEWPORT,
    payload: { center, zoom },
  }),
  setWaterFillColor: color => ({
    type: SET_WATER_FILL_COLOR,
    payload: { color },
  }),
}

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
