import { FAVORITE_TRACKS } from 'store/helpers/constants'
import { TrackProps } from 'types/api'

export function favoriteTracksReducer(
  state: Array<undefined | TrackProps> = [],
  action: any
) {
  switch (action.type) {
    case FAVORITE_TRACKS:
      return action.favoriteTracksList

    default:
      return state
  }
}
