import { SEARCH_ITEM } from 'store/helpers/constants'

export function searchItems(searchQuery: string) {
  return {
    type: SEARCH_ITEM,
    searchQuery,
  }
}
