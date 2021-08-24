import styled, { css } from 'styled-components'
import { IoMdPlay, IoMdPause, IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AudioTrack from 'components/AudioTrack'

export const PlayIcon = styled(IoMdPlay)``

export const PauseIcon = styled(IoMdPause)``

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    min-height: 132px;
    width: 100%;
    flex-wrap: wrap;
  `}
`

export const AlbumCover = styled(LazyLoadImage)`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    margin-right: ${theme.spacings.xsmall};
    width: clamp(60px, 100%, 100px);
  `}
`
export const TextWrapper = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
    width: 18rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Artist = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `}
`

export const AudioPlayer = styled(AudioTrack)``

export const PreviousTrack = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const CurrentTime = styled.span``

export const FavLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1091px) {
    margin-top: 16px;
  }
`

export const ProgressBarWrapper = styled.div``

export const ProgressBar = styled.input`
  ${({ theme }) => css`
    appearance: none;
    background-color: ${theme.colors.white};
    border-radius: 10px;
    height: 11px;
    outline: none;
    cursor: pointer;

    &::-moz-range-progress,
    &::-webkit-progress-value {
      content: '';
      height: 11px;
      background-color: ${theme.colors.thumbProgress};
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &::-webkit-slider-thumb,
    &::-moz-range-thumb {
      width: 10px;
      height: 22px;
      border-radius: 20px;
      background-color: ${theme.colors.white};
    }
  `}
`

export const TotalDuration = styled.span``

export const NextTrack = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const PlayPauseButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    cursor: pointer;
  `}
`

export const LikeButton = styled.button`
  ${({ theme }) => css`
    background: none;
    outline: none;
    border: none;
    margin-left: ${theme.spacings.xsmall};
    cursor: pointer;
  `}
`

export const HeartIconEmpty = styled(IoMdHeartEmpty)``

export const HeartIconFull = styled(IoMdHeart)``

export const FullTrackLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: ${theme.spacings.xsmall};
  `}
`
