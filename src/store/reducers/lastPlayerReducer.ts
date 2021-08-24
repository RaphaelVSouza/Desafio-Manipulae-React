import { LAST_PLAYER_ON } from 'store/helpers/constants'

export function lastPlayerReducer(state = -1, action: any) {
  switch (action.type) {
    case LAST_PLAYER_ON:
      return action.id

    default:
      return state
  }
}
