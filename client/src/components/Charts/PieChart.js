import {PieChartConfig} from './PieChartConfig';
import React, { useState } from 'react'
import ReactHighcharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme'
import {ChartWrapper, ChartSelect} from './styled'
import css from './style.css'

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const getDataToDisplay = (data, column) => {

    if (!data) {
        return null;
    }
    let xAxis = data.rows.map(row => row[0]);
    let yAxis = [{name: data.columnHeaders[column].name, data:data.rows.map(row => row[column])}];
    return {xAxis, yAxis};
}

const toProperCase = (word) => {
    let proper = "";
    word.split('').map(char => char === char.toUpperCase() ? proper+=" "+char : proper+=char);
    return proper;
}



const PieChart = ({data, name}) => {
    const [status, changeStatus] = useState(1);

    if(!data) {
        return <div>Loading audience stat</div>
    }

    return (
        <ChartWrapper>
            {/* <ChartSelect 
                defaultValue={status}
                onChange={e => {changeStatus(e.target.value)}}>
                {data.columnHeaders.filter( (value, index) => index > 0).map(({name}, index) => (<option key = {name} value={index+1}> {toProperCase(name)} </option>))}
            </ChartSelect> */}
            <div>
                <ReactHighcharts config={PieChartConfig(getDataToDisplay(data, status), name)}/>
            </div>
        </ChartWrapper>
    )
}

export default PieChart;