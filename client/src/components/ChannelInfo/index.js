import React from 'react'
import { useState } from 'react'
import {Card} from '../../shared/Card'
import ChannelInfoCard from './ChannelInfoCard'

import {WelcomeText, CardGridStyled} from './styled'


const ChannelInfo = ({totalViews, totalMinutesWatched, totalSubscribersGained, onChangeColumnName, selectedColumnName}) => {
    const [selectedCard, setSelectedCard] = useState(selectedColumnName);
    
    const changeColumnName = (columnName) => {
        setSelectedCard(columnName);
        onChangeColumnName(columnName);
    }

    return  (
        <CardGridStyled>
            <ChannelInfoCard isSelected={selectedCard==="views"} title="Views gained" number={totalViews} handleSelected={()=> changeColumnName("views")} />
            <ChannelInfoCard isSelected={selectedCard==="subscribersGained"} title="Subscribers gained" number={totalSubscribersGained} handleSelected={()=> changeColumnName("subscribersGained")} />
            <ChannelInfoCard isSelected={selectedCard==="estimatedMinutesWatched"} title="Minutes Watched gained" number={totalMinutesWatched} handleSelected={()=> changeColumnName("estimatedMinutesWatched")} />
        </CardGridStyled>
        
    )
}
export default ChannelInfo;
