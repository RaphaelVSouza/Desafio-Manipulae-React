import { connect } from 'react-redux'
import MusicCard from 'components/MusicCard'
import { TrackProps } from 'types/api'
import * as S from './styles'
import Loading from 'components/Loading'

const MusicsList = ({
  tracks,
  isLoading,
}: {
  tracks: Array<TrackProps>
  isLoading: boolean
}) => {
  return (
    <S.Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        tracks &&
        tracks.map(
          ({
            id,
            title,
            preview,
            link,
            explicit_lyrics,
            album,
            artist,
          }: TrackProps) => {
            return (
              <S.Track key={id}>
                <MusicCard
                  id={id}
                  artist={artist}
                  title={title}
                  preview={preview}
                  album={album}
                  link={link}
                />
              </S.Track>
            )
          }
        )
      )}
    </S.Wrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.itemsAreLoading,
  }
}

export default connect(mapStateToProps)(MusicsList)
