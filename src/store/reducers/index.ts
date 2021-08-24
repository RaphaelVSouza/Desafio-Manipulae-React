import { combineReducers } from 'redux'
import { items, itemsHaveError, itemsAreLoading } from './itemsReducer'
import { lastPlayerReducer } from './lastPlayerReducer'
import { searchReducer } from './searchReducer'
import { favoriteTracksReducer } from './favoriteTracksReducer'

export default combineReducers({
  items,
  itemsHaveError,
  itemsAreLoading,
  lastPlayerReducer,
  searchReducer,
  favoriteTracksReducer,
})
