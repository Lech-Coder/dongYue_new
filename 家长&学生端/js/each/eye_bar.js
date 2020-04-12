
function eye_bar(div,data) {
    var myChart = echarts.init(div);


    option = {
        color:['#f59a23','#70b603'],
        legend: {},
        tooltip: {},
        dataset: {
            dimensions: ['people', '左眼',  '右眼'],
            source:data
        },
        xAxis: {type: 'category'},
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            {type: 'bar'}
        ]
    };

    myChart.setOption(option, true);

}
