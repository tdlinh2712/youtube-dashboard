import {color3} from '../../shared/Styles'

function LightenDarkenColor(col, amt) {
    var num = parseInt(col.slice(1), 16);
    var r = (num >> 16) + amt;
    var b = ((num >> 8) & 0x00FF) + amt;
    var g = (num & 0x0000FF) + amt;
    var newColor = g | (b << 8) | (r << 16);
    return '#'+newColor.toString(16);
}  
// Make monochrome colors
var pieColors = (function () {
    var colors = ['#950717'];
    var i;
    for (i = 1; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(LightenDarkenColor(colors[i-1], 25 ));
    }
    return colors;
  }());
  
  // Build the chart
  export function PieChartConfig (data, title) {
    return {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: data
  }
};