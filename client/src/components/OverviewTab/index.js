import React, { Component } from 'react'
import {fetchTopVideos, fetchOverviewData, fetchTrafficSources} from '../../actions'
import {connect} from 'react-redux'
import styled from 'styled-components'
import OverallChart from '../Charts/OverallChart';
import ChannelInfo from '../ChannelInfo/index'
import {Card} from '../../shared/Card'
import TopVideos from '../TopVideos'
import SubscribedStatusChart from '../Charts/SubscribedStatusChart'
import PieChart from '../Charts/PieChart'
class OverviewTab extends Component {

    componentDidMount() {
        this.props.fetchOverviewData();
        this.props.fetchTopVideos();
        this.props.fetchTrafficSources()
    }


    render() {
        const {overviewData} = this.props;
        return (
            <Grid>
                <div>
                    <OverallChart historical={overviewData} />
                    <Card>
                        Top videos
                        <TopVideos videos = {this.props.topVideos}/>
                    </Card>
                </div>
                <Card>
                    <p>Traffic Sources</p>
                    <PieChart data = {this.props.trafficSources} name = "Traffic Source Types"/>
                </Card>
            </Grid>
            
        
        )
    }
}

const Grid = styled.div`
    display:grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 20px;
    margin-top: 20px;
`

function mapStateToProps({overviewData,auth,topVideos, trafficSources}) {
   
    return {overviewData,auth, topVideos, trafficSources};
};

export default connect(mapStateToProps, {fetchOverviewData, fetchTopVideos, fetchTrafficSources})(OverviewTab);