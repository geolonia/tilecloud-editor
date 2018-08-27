import { createActions as createMapActions, ACTIONS, reducer } from './'

it('action creator', () => {
  const viewport = {
    center: [100, 200],
    zoom: 12.345,
  }
  const setViewportAction = createMapActions.setViewport(viewport)
  expect(setViewportAction.type).toEqual(ACTIONS.SET_VIEWPORT)
  expect(setViewportAction.payload.viewport).toEqual(viewport)
})

it('reducer', () => {
  const prevState = {
    viewport: {
      center: [100, 200],
      zoom: 12.345,
    },
  }
  const nextViewport = {
    zoom: 15,
  }
  const setViewportAction = createMapActions.setViewport(nextViewport)
  const nextState = reducer(prevState, setViewportAction)
  expect(nextState.viewport.zoom).toEqual(nextViewport.zoom)
})
