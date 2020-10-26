import React, { useState } from 'react'
import {fetchDashboard, fetchBasicStat, fetchTopVideos} from '../../actions'
import {connect} from 'react-redux'
import styled from 'styled-components'
import OverallChart from '../Charts/OverallChart';
import ChannelInfo from '../ChannelInfo/index'
import {Card} from '../../shared/Card'
import TopVideos from '../TopVideos'
import TabBar from '../../container/TabBar'
import Tab from '../../container/Tab'
import OverviewTab from '../OverviewTab'
import AudienceTab from '../AudienceTab'


const Dashboard = () => {
    const [selectedTab,setSelectedTab] = useState("overview");
    return (
        <div>
            <TabBar selectedTab={selectedTab} onHandleChangeTab={setSelectedTab}/>
            <Tab activeTab={selectedTab}>
                <OverviewTab name="overview"/>
                <div name="reach"> Reach </div>
                <AudienceTab name="audience"/>
            </Tab>
        </div>
    )
}

export default Dashboard;