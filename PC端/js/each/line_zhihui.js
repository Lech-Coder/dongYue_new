function line_zhihui(div,xdata,data_inSchool,data_outSchool) {
    var myChart = echarts.init(div);
    option = {
        // title: {
        //     text: '未来一周气温变化',
        //     subtext: '纯属虚构'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['入校','出校']
        },
        grid:{
            left:'5%',
            top:'5%',
            bottom:'12%',
            right:'5%'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            nameGap:5,
            data: xdata
        },
        yAxis: {
            show:false,
            type: 'value',
            axisLabel: {
                formatter: '{value} °C',
                show:false
            },
            splitLine: {
                show: false
            },
        },
        series: [
            {
                name:'入校',
                type:'line',
                smooth:true,
                data:data_inSchool,

            },
            {
                name:'出校',
                type:'line',
                smooth:true,
                data:data_outSchool,

            }
        ]
    };
       myChart.setOption(option, true);
    resizeArr.push(myChart)

}
