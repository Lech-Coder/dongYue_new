
function bar_yujin(dom,bdata,title) {
    var myChart = echarts.init(dom);
    var color_y = ['#115c81','#e3b200','#ff773e']
    option = {
        tooltip : {
            trigger: 'axis',
        },
        title:{
          text:title
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['一级预警','二级预警','三级预警'],
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:0,
                type:'bar',
                barWidth: '25%',
                label: {
                    show: true,
                    position: 'top'
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num =color_y.length
                            return color_y[params.dataIndex%num]
                        },
                    }
                },
                data:bdata
            }
        ]
    };
    myChart.setOption(option, true);

    return myChart
}
function morebar_yujin(dom,bdata) {
    var myChart = echarts.init(dom);
    var color = ['#115c81','#e3b200','#ff773e']
    option = {
        color:color,
        legend: {},
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        dataset: {
            source:bdata
        },
        xAxis: {type: 'category'},
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'bar',
                barWidth: '10px',
                label: {
                    show: true,
                    position: 'top',
                    fontSize:'65%'
                },
            }, {
                type: 'bar',
                barWidth: '10px',
                label: {
                    show: true,
                    position: 'top',
                    fontSize:'65%'
                },
            }, {
                type: 'bar',
                barWidth: '10px',
                label: {
                    show: true,
                    position: 'top',
                    fontSize:'65%'
                },
            },

        ]
    };
    myChart.setOption(option, true);
    return myChart
}
