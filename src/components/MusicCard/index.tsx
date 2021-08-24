import { connect } from 'react-redux'
import { favoriteTracks } from 'store/actions/favoriteTracks'
import { TrackProps } from 'types/api'
import * as S from './styles'
import { useEffect, useState } from 'react'

interface MusicCardProps extends TrackProps {
  favoriteTrack: (favoriteTrack: Array<TrackProps | undefined>) => void
  isFavorited?: boolean
  favoriteTracksList: Array<TrackProps>
}

const MusicCard = ({
  id,
  album,
  title,
  artist,
  preview,
  favoriteTrack,
  favoriteTracksList,
  link,
}: MusicCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const index = favoriteTracksList.findIndex((x) => x.id === id)

    if (index !== -1) {
      setIsFavorited(true)
    } else {
      setIsFavorited(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorited, favoriteTracksList])

  function handleFavorite() {
    if (!isFavorited) {
      favoriteTrack([
        ...favoriteTracksList,
        { id, album, artist, link, preview, title },
      ])
    } else {
      const auxArray = [...favoriteTracksList]
      const index = auxArray.findIndex((x) => x.id === id)
      auxArray.splice(index, 1)
      favoriteTrack(auxArray)
    }
  }

  return (
    <S.Wrapper>
      <S.AlbumCover src={album.cover} alt={`${album.title} cover`} />
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Artist>{artist.name}</S.Artist>
      </S.TextWrapper>

      <S.AudioPlayer audioSource={preview} id={id} />
      <S.FavLinkWrapper>
        <S.LikeButton onClick={handleFavorite}>
          {isFavorited ? (
            <S.HeartIconFull
              size="32"
              color="#fff"
              aria-label="desfavoritar música"
            />
          ) : (
            <S.HeartIconEmpty
              size="32"
              color="#fff"
              aria-label="favoritar música"
            />
          )}
        </S.LikeButton>
        <S.FullTrackLink href={link} target="__blank">
          Escute a versão completa no Deezer
        </S.FullTrackLink>
      </S.FavLinkWrapper>
    </S.Wrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    favoriteTracksList: state.favoriteTracksReducer,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    favoriteTrack: (tracks: Array<TrackProps | undefined>) =>
      dispatch(favoriteTracks(tracks)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicCard)
