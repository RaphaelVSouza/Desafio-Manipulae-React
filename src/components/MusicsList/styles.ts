import styled, { css } from 'styled-components'

export const Wrapper = styled.ul``

export const Track = styled.li`
  & + & {
    margin-top: 20px;
  }
`
export const NotFound = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;
    font-size: ${theme.font.sizes.medium};
  `}
`
