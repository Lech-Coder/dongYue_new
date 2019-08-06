
function height_weight(div,xdata,data_bar1,data_bar2,data_line1,data_line2,type_name){
    var myChart = echarts.init(div);
    option = {
        color: colors,

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid:{
            left:'5%',
            top:'10%',
            bottom:'12%',
            right:'5%'
        },

        // legend: {
        //     data:['蒸发量','降水量','平均温度']
        // },
        xAxis: [
            {
                // name: '年级',
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: xdata
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: type_name,
                // min: 0,
                // max: 250,
                // position: 'right',
                // axisLine: {
                //     lineStyle: {
                //         color: colors[0]
                //     }
                // },
                axisLabel: {
                    formatter: '{value} cm'
                }
            },
            // {
            //     type: 'value',
            //     name: '降水量',
            //     // min: 0,
            //     // max: 250,
            //     position: 'right',
            //     offset: 80,
            //     axisLine: {
            //         lineStyle: {
            //             color: colors[1]
            //         }
            //     },
            //     axisLabel: {
            //         formatter: '{value} ml'
            //     }
            // },
            // {
            //     type: 'value',
            //     name: '温度',
            //    show:false,
            //     // min: 0,
            //     // max: 25,
            //     position: 'left',
            //     axisLine: {
            //         lineStyle: {
            //             color: colors[2]
            //         }
            //     },
            //     axisLabel: {
            //         formatter: '{value} °C'
            //     }
            // }
        ],
        series: [
            {
                name:'bar1',
                type:'bar',
                data:data_bar1
            },
            {
                name:'bar2',
                type:'bar',
                // yAxisIndex: 1,
                data:data_bar2,
            },
            {
                name:'line1',
                type:'line',
                // yAxisIndex: 2,
                data:data_line1,
                smooth: true,
                lineStyle:{
                    color:colors[2]
                }
            },
            {
                name:'line2',
                type:'line',
                // yAxisIndex: 2,
                smooth: true,
                data:data_line2,
                lineStyle:{
                    color:colors[2]
                }
            }
        ]
    };

    myChart.setOption(option, true);
}