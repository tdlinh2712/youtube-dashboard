import {StackedBarChart} from './HighchartsConfig';
import React, { useState } from 'react'
import ReactHighcharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme'
import {ChartWrapper, ChartSelect} from './styled'
import css from './style.css'

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const getDataToDisplay = (audienceData, status) => {
    if (!audienceData) {
        return null;
    }
    let xAxis = [];
    let yAxis = [];
    audienceData = audienceData[status];
    audienceData.rows.map( (data) => {
        let index = xAxis.findIndex(x => x === data[0]);
        if(index === -1) {
            index = xAxis.length;
            xAxis.push(data[0]);
        }
        let yIndex = yAxis.findIndex(({name}) => name===data[1]);
        if (yIndex === -1) {
            yIndex = yAxis.length;
            yAxis.push({name: data[1], data: []})
        };
        yAxis[yIndex].data.push(data[2]);
    } )

    return {xAxis, yAxis};
}



const DemographicChart = ({data}) => {
    const [status, changeStatus] = useState("UNSUBSCRIBED");
    if(!data) {
        return <div>Loading audience stat</div>
    }

    return (
        <ChartWrapper>
            <ChartSelect 
                defaultValue={status}
                onChange={e => {changeStatus(e.target.value)}}>
                <option value="SUBSCRIBED">Subscribed</option>
                <option value="UNSUBSCRIBED">Not subscribed</option>
            </ChartSelect>
            <div>
                <ReactHighcharts config={StackedBarChart(getDataToDisplay(data, status), "Gender and Age Group", "%")}/>
            </div>
        </ChartWrapper>
    )
}

export default DemographicChart;