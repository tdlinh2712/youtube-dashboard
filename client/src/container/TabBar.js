
import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {color3} from '../shared/Styles'
import TabNames from './TabNames'

const Bar = styled.div`
    display: grid;
    grid-template-columns: auto 100px 100px 100px 100px ;
    margin-bottom: 40px;
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    text-align:center;
    margin: 10px auto 10px auto;
    ${props => props.active && css`
        border-bottom: 2px solid ${color3};
        color:${color3};
    `}
    ${props => props.hidden && css`
        display: none;
    `}
`


const renderTabs = (tabNames, active, setActive) => {
    return (
        tabNames.map(({title, name}, index) => {
            return (
            <ControlButtonElem key={`tab-${title}`} active={name===active} onClick={() => setActive(name)}>
                {title}
            </ControlButtonElem>)
        })
    )
}

const AppBar = ({selectedTab, onHandleChangeTab}) => {
    
    return (
    <Bar>
        <div>Dashboard</div>
        {renderTabs(TabNames, selectedTab, onHandleChangeTab)}
    </Bar>
    )
}

export default AppBar;