var color=['#c1413e','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39'];
function bar_shili(div,xdata,ydata) {
    var myChart = echarts.init(div);
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
                left:'5%',
                top:'5%',
                bottom:'10%',
                right:'10%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xdata,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    formatter: '{value}%',
                },
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '35%',
                data:ydata,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num =color.length
                            return color[params.dataIndex%num]
                        },
                    }
                },
                "label": {
                    "normal": {
                        "show": true,
                        "position": "top",
                        "formatter": "{c}%"
                    }
                },
            }
        ]
    };
    myChart.setOption(option, true);

    return myChart
}
