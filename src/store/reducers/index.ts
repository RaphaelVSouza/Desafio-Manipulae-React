import { combineReducers } from 'redux'
import { items, itemsHaveError, itemsAreLoading } from './itemsReducer'
import { pauseReducer } from './pauseReducer'

export default combineReducers({
  items,
  itemsHaveError,
  itemsAreLoading,
  pauseReducer,
})
