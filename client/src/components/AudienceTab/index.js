import React, {Component} from 'react'
import {fetchAudienceData, fetchSubscribedStatusData, fetchTrafficSources} from '../../actions'
import {connect} from 'react-redux'
import {Card} from '../../shared/Card'
import styled from 'styled-components'
import DemographicChart from '../Charts/DemographicChart'
import SubscribedStatusChart from '../Charts/SubscribedStatusChart'

const CardDividerContainer = styled.div`
    display:grid;
    margin-top: 20px;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
`


class AudienceTab extends Component {
    componentDidMount() {
        this.props.fetchAudienceData();
        this.props.fetchSubscribedStatusData();
        this.props.fetchTrafficSources();
    }

    render() {
        return (
            <div>
                <div>
                Audience Tab
                </div>
                <Card>
                    <p>Traffic Sources</p>
                    <SubscribedStatusChart data = {this.props.trafficSources} name = "Traffic Source Types"/>
                </Card>
                <CardDividerContainer>
                    <Card>
                        <p>Viewers</p>
                        <SubscribedStatusChart data = {this.props.subscribedStatusData} name = "Subscriber status chart"/>
                    </Card>
                    <Card>
                        <p>Gender and Age group</p>
                        <DemographicChart data = {this.props.audienceData}/>
                    </Card>
                </CardDividerContainer>
                
            </div>
            
        )
    }
}

function mapStateToProps({audienceData, subscribedStatusData, trafficSources}) {
   
    return {audienceData, subscribedStatusData, trafficSources};
};

export default connect(mapStateToProps, {fetchAudienceData, fetchSubscribedStatusData, fetchTrafficSources})(AudienceTab);