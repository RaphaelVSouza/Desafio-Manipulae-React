import { FAVORITE_TRACKS } from 'store/helpers/constants'
import { TrackProps } from 'types/api'

type FavoriteTracksListProps = Array<undefined | TrackProps>

export function favoriteTracks(favoriteTracksList: FavoriteTracksListProps) {
  return {
    type: FAVORITE_TRACKS,
    favoriteTracksList,
  }
}
