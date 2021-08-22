import styled, { css } from 'styled-components'
import { IoMdPlay, IoMdPause } from 'react-icons/io'

export const PlayIcon = styled(IoMdPlay)``

export const PauseIcon = styled(IoMdPause)``

export const AudioPlayer = styled.div`
${({ theme }) => css`
    display: flex;
    align-items: center;

    * + * {
        margin-left: ${theme.spacings.xsmall};
    }

`}


`

export const PreviousTrack = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;

`

export const CurrentTime = styled.span``

export const ProgressBarWrapper = styled.div``

export const ProgressBar = styled.input`
${({ theme }) => css `
    appearance: none;
    background-color: ${theme.colors.white};
    border-radius: 10px;
    height: 11px;
    outline: none;
    cursor: pointer;

    &::-moz-range-progress, &::-webkit-progress-value {
        content: '';
        height: 11px;
        background-color: ${theme.colors.thumbProgress};
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

    }

    &::-webkit-slider-thumb, &::-moz-range-thumb {
        width: 10px;
        height: 22px;
        border-radius: 20px;
        background-color: ${theme.colors.white};

    }

`}
`

export const TotalDuration = styled.span``

export const NextTrack = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const PlayPauseButton = styled.button`
${({ theme }) => css `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    background-color: ${theme.colors.white};
    border-radius: 50%;
    cursor: pointer;
`}

`
