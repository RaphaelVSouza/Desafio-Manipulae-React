import React, { useEffect } from 'react'
import { itemsFetchData } from 'store/actions/fetchItems'
import { pausePlayers } from 'store/actions/pausePlayers'
import { connect } from 'react-redux'
import * as S from './styles'
import MusicCard from 'components/MusicCard'

type TrackProps = {
  id: number
  title: string
  explicit_lyrics: boolean
  preview: string
  link: string
  position: number
  album: {
    id: number
    title: string
    cover: string
  }
  artist: {
    id: number
    name: string
  }
}

type ResponseProps = {
  data: object[]
  total: number
}

type PageChartProps = {
  fetchData: (url: string) => void
  items: {
    albums: ResponseProps
    artists: ResponseProps
    playlists: ResponseProps
    podcasts: ResponseProps
    tracks: {
      data: Array<TrackProps>
      total: number
    }
  }
}

const PageMusicCharts = ({ fetchData, items }: PageChartProps) => {
  const corsProxyUrl = 'https://cors-anywhere-raphael.herokuapp.com'

  useEffect(() => {
    fetchData(`${corsProxyUrl}/https://api.deezer.com/chart`)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {}, [items])
  return (
    <S.Wrapper>
      <ul>
        {items.tracks &&
          items.tracks.data.map(
            ({
              id,
              title,
              position,
              preview,
              link,
              explicit_lyrics,
              album,
              artist,
            }: TrackProps) => {
              return (
                <S.Track>
                  <MusicCard
                    key={id}
                    title={title}
                    previewUrl={preview}
                    albumCover={{
                      path: album.cover,
                      alt: `${album.title} cover`,
                    }}
                    trackUrl={link}
                  />
                </S.Track>
              )
            }
          )}
      </ul>
    </S.Wrapper>
  )
}

const mapStateToProps = (state: any) => {
  return {
    items: state.items,
    isRunning: state.isRunning,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: (url: string) => dispatch(itemsFetchData(url)),
    pausePlayers: (isRunning: boolean) => dispatch(pausePlayers(isRunning)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageMusicCharts)
