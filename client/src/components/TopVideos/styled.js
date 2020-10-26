import styled, {css} from 'styled-components'
import {color3} from '../../shared/Styles'

export const VideoGrid = styled.div`
    display: grid;
    grid-template-columns: auto 100px 100px 100px;
    margin-bottom: 40px;
    align-items: center;
`

export const VideoTitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 180px auto;
    align-items: center;
`

export const VideoTitle = styled.a`
    text-decoration: none;
    color: white;
    &:hover {
        cursor: pointer;
        color:${color3};
    }
`
