import {TimeSeriesChart} from './HighchartsConfig';
import React, { useState } from 'react'
import ReactHighcharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme'
import ChannelInfo from '../ChannelInfo'
import {ChartWrapper, ChartSelect} from './styled'
import {Card} from '../../shared/Card'
import css from './style.css'
import styled from 'styled-components'

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

//get the right column to display
const getDataForDisplay = (historical,rowName, scale) => {
    const results = [];
    let columnIndex = historical.columnHeaders.findIndex(col => col.name === rowName);
    if(columnIndex===-1 || columnIndex ===0) {
        return [];
    } else {
        results.push({name:historical.columnHeaders[columnIndex].name});
        results[0].data = historical.rows.map(row => [(new Date(row[0])).valueOf(),row[columnIndex]]);
        results[0].data = results[0].data.slice(Math.max(results[0].data.length - scale, 0));
    }
    return results;
}

const getSums = (overviewData, scale) => {
    if(!overviewData) {
        return {};
    }

    let totalViews=0, totalSubscribersGained=0, totalMinutesWatched = 0;
    let {rows} = overviewData;
    rows = rows.slice(Math.max(rows.length - scale, 0));
    rows.map(data => {
        totalViews += data[1];
        totalSubscribersGained += data[2];
        totalMinutesWatched += data[3];
    })
    return {totalViews, totalSubscribersGained, totalMinutesWatched};
}

const ChartStyled = styled(ReactHighcharts)`
    height:200px;
` 
const OverallChart = ({historical}) => {
    const [scale, changeScale] = useState(28);
    const [columnName, setColumnName] = useState("views");
    if (!historical) {
        return <div>Loading historical data</div>
    }
    const {totalViews, totalSubscribersGained, totalMinutesWatched} = getSums(historical, scale);
    return (
        <div>
            <ChannelInfo 
                totalViews={totalViews} 
                totalSubscribersGained ={totalSubscribersGained}
                totalMinutesWatched = {totalMinutesWatched}
                selectedColumnName={columnName} 
                onChangeColumnName={(columnName)=> setColumnName(columnName)}
            />
            <ChartWrapper>
                <ChartSelect 
                    defaultValue={scale}
                    onChange={e => changeScale(e.target.value)}>
                    <option value={7}>Last 7 days</option>
                    <option value={28}>Last 28 days</option>
                    <option value={90}>Last 90 days</option>
                    <option value={365}>Last year</option>
                </ChartSelect>
                <div>
                    <ChartStyled config={TimeSeriesChart(getDataForDisplay(historical, columnName, scale), columnName)}/>
                </div>
            </ChartWrapper>
            
        </div>
    )
}



export default OverallChart;


