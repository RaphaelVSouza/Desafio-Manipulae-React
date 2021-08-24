import { LAST_PLAYER_ON } from 'store/helpers/constants'

export function lastPlayerOn(id: number) {
  return {
    type: LAST_PLAYER_ON,
    id,
  }
}
