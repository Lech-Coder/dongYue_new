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
                top:'10%',
                bottom:'5%',
                right:'5%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xdata,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    interval:0,
                    rotate:30,
                },
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
                barWidth: '30px',
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
function bar_yujin(dom,bdata) {
    var myChart = echarts.init(dom);
    var color_y = ['#115c81','#e3b200','#ff773e']
    option = {
        tooltip : {
            trigger: 'axis',
        },
        grid: {
            left: '5%',
            right: '5%',
            top:'10%',
            bottom: '13%',
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
                type:'bar',
                barWidth: '25%',
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
    resizeChart.push(myChart)
}
