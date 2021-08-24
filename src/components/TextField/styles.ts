import styled, { css } from 'styled-components'
import Media from 'styled-media-query'

export const Wrapper = styled.div``

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    height: 4rem;
    width: 100%;
  `}

  ${Media.greaterThan('medium')`
      width: 40rem;
    `}
`
