import styled from 'styled-components'
import {subtleBoxShadow, redBoxShadow, greyBackground} from './Styles'

export const Card = styled.div`
    ${subtleBoxShadow};
    ${greyBackground};
    padding: 10px;
    margin-bottom:20px;
    border-radius:10px;
`
export const SelectableCard = styled(Card)`
    &:hover {
        cursor: pointer;
        ${redBoxShadow}
    }
`

export const DisabledCard = styled(Card)`
    pointer-events: none;
    opacity: 0.4;
`
export const SelectedCard = styled(Card)`
    ${redBoxShadow};
    pointer-events: none;
`