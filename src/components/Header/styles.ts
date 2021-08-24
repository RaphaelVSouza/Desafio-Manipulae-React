import { IoIosMusicalNotes } from 'react-icons/io'
import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const Dance = keyframes`
    0%, 100% {
        transform: translate3d(0, -4px,0);
    }
    50% {
        transform: translate3d(0, 4px,0);
    }

`

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    width: 100%;
    padding: 0 calc(${theme.grid.gutter} / 2);
    height: 72px;
    position: fixed;
    top: 0;

    box-shadow: 0 16px 24px 0 rgba(51, 49, 50, 0.16);
  `}
`

export const MusicNoteIcon = styled(IoIosMusicalNotes)`
  animation-name: ${Dance};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`
export const Anchor = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
