import { SEARCH_ITEM } from 'store/helpers/constants'

export function searchReducer(state = '', action: any) {
  switch (action.type) {
    case SEARCH_ITEM:
      return action.searchQuery

    default:
      return state
  }
}
