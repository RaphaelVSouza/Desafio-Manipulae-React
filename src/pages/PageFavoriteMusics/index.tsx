import Container from 'components/Container'
import Header from 'components/Header'
import MusicsList from 'components/MusicsList'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { TrackProps } from 'types/api'

const PageFavoriteMusics = ({
  favoriteTracksList,
}: {
  favoriteTracksList: Array<TrackProps>
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [favoriteTracksList])

  return (
    <>
      <Header />
      <Container>
        <h2
          style={{ textAlign: 'center', color: 'black', marginBottom: '20px' }}
        >
          Suas músicas favoritas:
        </h2>
        {favoriteTracksList && <MusicsList tracks={favoriteTracksList} />}
      </Container>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    favoriteTracksList: state.favoriteTracksReducer,
  }
}

export default connect(mapStateToProps)(PageFavoriteMusics)
