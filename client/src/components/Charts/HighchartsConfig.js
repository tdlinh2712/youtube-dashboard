import {color, color2, color3, color4} from '../../shared/Styles'

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

export default function LineChart(historical, rowName, scale){
    console.log(scale);
    let result = getDataForDisplay(historical, rowName,scale);
    console.log(result);
    return {
        title: {
            text:`${rowName} gained last month`
        },
        yAxis: {
            title: {
                text: `${rowName}`
            }
        },
        xAxis: {
            type:'datetime'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        series: result,
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    }
}

export function TimeSeriesChart(data, columnName) {
    return {
      chart: {
        type:'area',
        zoomType: 'x'
      },
      title: {
        text:""
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
            text: `${columnName}`
        }
      },
      legend: {
        enabled: false
      },
      series: data,
    }
  }

  export function StackedBarChart ({xAxis, yAxis}, title, unitName) {
      return {
        colors: [
            '#B50717',
            '#120307',
        ],
        chart: {
          type: 'bar'
        },
        title: {
          text: ""
        },
        xAxis: {
          categories: xAxis
        },
        yAxis: {
          min: 0,
          title: {
            text: unitName
          }
        },
        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: yAxis
      }
  }