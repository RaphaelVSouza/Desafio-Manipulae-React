import { render, screen } from '@testing-library/react'

import AudioTrack from '.'

describe('<AudioTrack />', () => {
  it('should render the heading', () => {
    const { container } = render(<AudioTrack audioSource=""/>)

    expect(screen.getByRole('heading', { name: /AudioTrack/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
