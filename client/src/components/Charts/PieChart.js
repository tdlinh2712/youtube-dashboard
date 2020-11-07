import {PieChartConfig} from './PieChartConfig';
import React, { useState } from 'react'
import ReactHighcharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme'
import {ChartWrapper, ChartSelect} from './styled'
import css from './style.css'
import {toProperCase} from '../../services/ToProperCase'

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const getDataToDisplay = (data, column) => {
    if (!data) {
        return null;
    }
    let dataForDisplay = [];
    data.rows.map( source => {
        dataForDisplay.push({name: toProperCase(source[0],'_'), y:source[column]});
    });
    //dataForDisplay[0] = {...dataForDisplay[0], sliced: true};
    return [{
        minPointSize: 10,
        innerSize: '50%',
        zMin: 0,
        name: 'Views',
        data: dataForDisplay
      }]
}

// const toProperCase = (words) => {
//     let proper = "";
//     words.split('_').map((word, index) => word.split("").map((char, index) => index === 0 ? proper+=" "+char.toUpperCase() : proper+=char.toLowerCase()) );
//     return proper;
// }



const PieChart = ({data, name}) => {
    const [status, changeStatus] = useState(1);

    if(!data) {
        return <div>Loading audience stat</div>
    }

    return (
        <ChartWrapper>
            <ChartSelect 
                defaultValue={status}
                onChange={e => {changeStatus(e.target.value)}}>
                {data.columnHeaders.filter( (value, index) => index > 0).map(({name}, index) => (<option key = {name} value={index+1}> {toProperCase(name,'')} </option>))}
            </ChartSelect>
            <div>
                <ReactHighcharts config={PieChartConfig(getDataToDisplay(data, status), name)}/>
            </div>
            <div>

            </div>
        </ChartWrapper>
    )
}

export default PieChart;