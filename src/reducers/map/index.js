import update from 'immutability-helper'

const initialState = {
  viewport: {
    latitude: 35.689488,
    longitude: 139.691706,
    zoom: 3,
  },
}

const SET_VIEWPORT = 'MAP.SET_VIEPORT'

export const ACTIONS = {
  SET_VIEWPORT,
}

export const createActions = {
  setViewport: viewport => ({ type: SET_VIEWPORT, payload: { viewport } }),
}

export const reducer = (state = initialState, action) => {
  const { type } = action
  if (type === SET_VIEWPORT) {
    return update(state, {
      viewport: { $set: { ...state.viewport, ...action.payload.viewport } },
    })
  } else {
    return state
  }
}

export default reducer
