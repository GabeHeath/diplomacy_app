<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>

</head>
<body>

<?php
include '../../php-lib/config.php';
include '../db.php';
?>

Hi
<script>
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
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
            series: [{
                name: 'Tokyo',
                data: <?php echo $contents; ?>
            }, {
                name: 'New York',
                data: <?php echo $contents; ?>
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
    });
    


</script>



<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

</body>
</html>
