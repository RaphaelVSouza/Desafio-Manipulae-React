export interface TrackProps {
  id: number
  title: string
  explicit_lyrics?: boolean
  preview: string
  link: string
  position?: number
  album: {
    id: number
    title: string
    cover: string
  }
  artist: {
    id: number
    name: string
  }
  isFavorited?: boolean
}

export type AttributeProps = {
  data: object[]
  total: number
}

export type ResponseProps = {
  albums: AttributeProps
  artists: AttributeProps
  playlists: AttributeProps
  podcasts: AttributeProps
  tracks: {
    data: Array<TrackProps>
    total: number
  }
}
