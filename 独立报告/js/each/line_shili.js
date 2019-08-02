function line_shili(div,data_x,jishilv,shilibuliang) {
    var myChart = echarts.init(div);
    option = {
        color:['#37a2da','#ff8175'],
        xAxis: {
            type: 'category',
            data: data_x
        },
        tooltip: {
            trigger: 'axis'
        },
        grid:{
            left:'10%',
            top:'5%',
            bottom:'15%',
            right:'10%'
        },
        legend: {
            data:['近视率', '视力不良率'],
            y:'bottom'
        },
        yAxis: {
            type: 'value',
            max:100,
            axisLabel: {
                formatter: '{value}%',
            },
        },
        series: [{
            name:'近视率',
            data: jishilv,
            type: 'line',
            smooth: true
        },
            { name:'视力不良率',
                data:shilibuliang ,
                type: 'line',
                smooth: true
            }]
    };


    myChart.setOption(option, true);

}
