import styled from 'styled-components'
import {fontSize1} from '../../shared/Styles'

export const WelcomeText = styled.p`
    ${fontSize1};
    margin-bottom: 20px;

`

export const CardGridStyled = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 60px;
        margin-top: 20px;
`