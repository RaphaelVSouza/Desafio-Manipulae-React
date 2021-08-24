import axios from 'axios'
import {
  ITEMS_ARE_LOADING,
  ITEMS_FETCH_DATA_SUCCESS,
  ITEMS_HAVE_ERROR,
} from 'store/helpers/constants'
import { action } from 'types/redux'

export function itemsHaveError(hasError: boolean) {
  return {
    type: ITEMS_HAVE_ERROR,
    hasError,
  }
}

export function itemsAreLoading(isLoading: boolean) {
  return {
    type: ITEMS_ARE_LOADING,
    isLoading,
  }
}

export function itemsFetchDataSuccess(items: Array<object | undefined>) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    items,
  }
}

type itemsDispatchFn = (action: action) => void

export function itemsFetchData(url: string) {
  return (dispatch: itemsDispatchFn) => {
    dispatch(itemsAreLoading(true))
    axios
      .get(url)
      .then((response) => {
        if (response.status !== 200) throw Error(response.statusText)
        dispatch(itemsAreLoading(false))
        return response
      })
      .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
      .catch(() => dispatch(itemsHaveError(true)))
  }
}
