import styled, { css } from 'styled-components'
import Media from 'styled-media-query'

const Container = styled.main`
  ${({ theme }) => css`
    width: 100%;
    padding: 114px calc(${theme.grid.gutter} / 2);

    ${Media.greaterThan('large')`
            width: ${theme.grid.container};
            margin: 0 auto;
        `}
  `}
`

export default Container
