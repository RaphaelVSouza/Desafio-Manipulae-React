import styled from 'styled-components'

export const Wrapper = styled.main``

export const Track = styled.li`
  & + & {
    margin-top: 20px;
  }
`