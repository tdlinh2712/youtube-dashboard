import React from 'react'
import styled from 'styled-components'
import {SelectableCard,SelectedCard} from '../../../shared/Card'
import {fontSize1} from '../../../shared/Styles'

const ChannelInfoCard = ({title, number, handleSelected, isSelected}) => {
    let CardClass = isSelected ? SelectedCard : SelectableCard;
    return (
        <CardClass onClick={handleSelected}>
            <p>{title}</p>
            <NumberStyled>+{number}</NumberStyled>
        </CardClass>
    )
}

export default ChannelInfoCard;

const NumberStyled = styled.p`
    justify-self:center;
    ${fontSize1}
`