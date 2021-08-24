import styled, { css } from 'styled-components'
import { IoMdSearch } from 'react-icons/io'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    .input {
      border: none;
      border-radius: 8px;
      padding: 0 42px 0 12px;
    }
  `}
`

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 4px;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  border: none;
  cursor: pointer;
`

export const SearchButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchIcon = styled(IoMdSearch)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
