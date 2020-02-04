function line_heart(div,data_x,data) {
    var myChart = echarts.init(div);
    var series=[]

    for (let i=0;i<data.length;i++){
        series.push({
            name: data[i].name,
            data:data[i].data,
            type: 'line',
            smooth: true
        })
    }
    option = {
        // color:['#c1413e','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39'],
        xAxis: {
            type: 'category',
            data: data_x
        },
        title:{
            text:'课堂心率曲线',
            left:'5%' ,
            top:'3%',
            textStyle: {
                fontSize:18,
                fontWeight:'normal'
            },
        },
        grid: {
            left:'5%',
            top:'15%',
            bottom:'5%',
            right:'5%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:function () {
                var le=[]
                for(let i=0;i<data.length;i++){
                    le.push(data[i].name)
                }
                return le
            },
            y:'bottom'
        },
        yAxis: {
            type: 'value',
            // max:100,
            axisLabel: {
                formatter: '{value}',
            },
        },
        series: series
    };


    myChart.setOption(option, true);

}
