var phpOutput="<?php echo $contents; ?>";

$(function () {
        $('#container').highcharts({
        	chart: {
                type: 'spline'
            },
            title: {
                text: 'Bi-Annual Diplomacy Rating',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: Gabe',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yAxis: {
                title: {
                    text: 'Rating'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },

            credits: {
    			enabled: false
  			},
            series: [{
                name: 'Andrew',
                data: <?php echo $contents; ?>
            }, {
                name: 'Stephan',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Tom',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'Havens',
                data: [8.2, 3.1, 22.0, 11.0, 10.7, 2.6, 6.3, 17.6, 27.1, 20.0, 5.3, 21.9]
            }, {
                name: 'Pierce',
                data: [1.7, 1.3, 5.3, 4.3, 6.4, 5.2, 7.2, 8.5, 9.6, 10.2, 13.9, 11.7]
            }, {
                name: 'MCM',
                data: [1.2, 1.8, 5.3, 5.5, 7.6, 8.6, 10.6, 11.5, 9.9, 13.0, 11.1, 11.5]
            }, {
                name: 'Alex',
                data: [3.4, 4.0, 2.9, 6.0, 4.8, 8.9, 6.8, 7.7, 12.9, 10.9, 13.5, 13.7]
            }, {
                name: 'TJ',
                data: [1.8, 2.2, 5.9, 6.1, 6.9, 9.0, 7.9, 10.2, 10.8, 11.7, 10.1, 12.0]
            }, {
                name: 'Mike',
                data: [2.5, 3.7, 4.0, 4.0, 5.3, 5.4, 7.7, 10.5, 10.1, 10.3, 13.6, 12.6]
            }]

        });
    });
    

