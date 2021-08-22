import { Story, Meta } from '@storybook/react'
import MusicCard from '.'

export default {
  title: 'MusicCard',
  component: MusicCard,
  args: {
    albumCover: {
      path: 'https://api.deezer.com/album/137217782/image',
      alt: 'album cover',
    },
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    totalDuration: 3000,
    previewUrl:
      'https://cdns-preview-0.dzcdn.net/stream/c-0cb3c26f5c0be8b37d90560955431118-8.mp3',
    trackUrl: 'https://www.deezer.com/track/908604612/%22',
    isFavorited: false,
  },
} as Meta

export const Default: Story = (args) => (
  // Ignoring type checking because all arguments are passing on Meta
  // @ts-ignore: Unreachable code error
  <MusicCard {...args} />
)
