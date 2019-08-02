function pie_shili(div,point,data) {
    var myChart = echarts.init(div);
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        title: {
            text: '近视率',
            subtext: toPercent(point),
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize:30,
                fontWeight:'normal',
                color: '#ff8175'
            },
            subtextStyle: {
                color: '#ff8175',
                fontSize: 30
            },
        },
        color:['#ff8175','#37a2da'],
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['正常','早退','缺勤','迟到']
        // },
        series: [
            {
                type:'pie',
                radius: ['50%', '70%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },

                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }

                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:data
            }
        ]
    };
    myChart.setOption(option, true);

}

function toPercent(point){
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
}
