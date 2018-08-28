import { createStore, combineReducers, applyMiddleware } from 'redux'

/**
 * Reducers
 */
import styleReducer from './reducers/style'

/**
 * middlewares
 * @type {Array<function>}
 */
const middlewares = []

/**
 * store
 * @type {object}
 */
const store = createStore(
  combineReducers({
    style: styleReducer,
  }),
  applyMiddleware(...middlewares),
)

/**
 * export
 */
export default store
