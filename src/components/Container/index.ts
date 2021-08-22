import styled, { css } from 'styled-components'
import Media from 'styled-media-query'

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ${Media.greaterThan('large')`
            width: ${theme.grid.container};
            padding: 0 calc(${theme.grid.gutter} / 2);
            margin: 0 auto;
        `}
  `}
`

export default Container
