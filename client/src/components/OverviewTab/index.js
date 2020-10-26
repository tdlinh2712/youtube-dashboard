import React, { Component } from 'react'
import {fetchTopVideos, fetchOverviewData} from '../../actions'
import {connect} from 'react-redux'
import styled from 'styled-components'
import OverallChart from '../Charts/OverallChart';
import ChannelInfo from '../ChannelInfo/index'
import {Card} from '../../shared/Card'
import TopVideos from '../TopVideos'
class OverviewTab extends Component {

    componentDidMount() {
        this.props.fetchOverviewData();
        this.props.fetchTopVideos();
    }


    render() {
        const {overviewData} = this.props;
        return (
            <div>
                <OverallChart historical={overviewData} />
                <Card>
                    Top videos
                    <TopVideos videos = {this.props.topVideos}/>
                </Card>
                
                
            </div>
        
        )
    }
}

function mapStateToProps({overviewData,auth,topVideos}) {
   
    return {overviewData,auth, topVideos};
};

export default connect(mapStateToProps, {fetchOverviewData, fetchTopVideos})(OverviewTab);