import AudioTrack from 'components/AudioTrack'
import * as S from './styles'

type MusicCardProps = {
  id?: number
  rank?: number
  isExplicit?: boolean
  albumCover: {
    path: string
    alt: string
  }
  title: string
  artist?: string
  previewUrl: string
  trackUrl: string
  isFavorited?: boolean
}

const MusicCard = ({
  albumCover,
  title,
  artist,
  previewUrl,
  isFavorited,
  trackUrl,
}: MusicCardProps) => {
  return (
    <S.Wrapper>
      <S.AlbumCover src={albumCover.path} alt={albumCover.alt} />
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Artist>{artist}</S.Artist>
      </S.TextWrapper>

      <AudioTrack audioSource={previewUrl} />

      <S.LikeButton>
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
      <S.FullTrackLink href={trackUrl} target="__blank">
        Escute a versão completa no Deezer
      </S.FullTrackLink>
    </S.Wrapper>
  )
}

export default MusicCard
