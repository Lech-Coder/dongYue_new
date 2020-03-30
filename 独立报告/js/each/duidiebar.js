function bar_duidie(dom,oridata,xdata,ydata,class_num) {
    var myChart = echarts.init(dom);
    var data0 = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var total;
    for (var i = 0, l = oridata[0].length; i < l; i++) {
        total = oridata[0][i]*1 + oridata[1][i]*1 + oridata[2][i]*1+ oridata[3][i]*1;
        if (total==0){
            data0.push(0);
            data1.push(0);
            data2.push(0);
            data3.push(0);
        } else {
            data0.push(Math.round(oridata[0][i]/total * 100));
            data1.push(Math.round(oridata[1][i]/total * 100));
            data2.push(Math.round(oridata[2][i]/total * 100));
            data3.push(100 - data0[data0.length - 1] - data1[data1.length - 1]- data2[data2.length - 1]);
        }
    }
    option = {
        color:['#d8d8d8','#f59b1e','#00a9f0','#83b749'],
        tooltip : {
            trigger: 'axis',
            axisPointer : { // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            // formatter: "{b}: {c} ({d}%)"
        },
        grid: {
            left:'5%',
            top:'10%',
            bottom:'3%',
            right:'5%',
            containLabel: true
        },
        // legend: {
        //     data:xdata
        // },
        title:{
          text:class_num,
            // top:'1%'
            left:'5%'
        },
        xAxis : [
            {
                type : 'category',
                data : ydata,
                axisLabel: {
                    fontSize:10,
                    interval: 0,
                    rotate:45
                    // formatter:function(val){
                    //     return val.split("").join("\n");
                    // }
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitArea : {show : true},
                axisLabel: {
                    formatter: '{value}%',
                },
            }
        ],
        series : [
            {
                name:xdata[0],
                type:'bar',
                barWidth: '35%',
                stack: '成绩',
                data:data0
            },
            {
                name:xdata[1],
                type:'bar',
                stack: '成绩',
                data:data1
            },
            {
                name:xdata[2],
                type:'bar',
                stack: '成绩',
                data:data2
            },{
                name:xdata[3],
                type:'bar',
                stack: '成绩',
                data:data3
            }
        ]
    };
    myChart.setOption(option, true);
}

function bar_duidie_single(dom,oridata,xdata,ydata) {
    var myChart = echarts.init(dom);
    var data0 = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var total;
    for (var i = 0, l = oridata[0].length; i < l; i++) {
        total = oridata[0][i]*1 + oridata[1][i]*1 + oridata[2][i]*1+ oridata[3][i]*1;
        if (total==0){
            data0.push(0);
            data1.push(0);
            data2.push(0);
            data3.push(0);
        } else {
            data0.push(Math.round(oridata[0][i]/total * 100));
            data1.push(Math.round(oridata[1][i]/total * 100));
            data2.push(Math.round(oridata[2][i]/total * 100));
            data3.push(100 - data0[data0.length - 1] - data1[data1.length - 1]- data2[data2.length - 1]);
        }
    }
    option = {
        color:['#d8d8d8','#f59b1e','#00a9f0','#83b749'],
        tooltip : {
            trigger: 'axis',
            axisPointer : { // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            // formatter: "{b}: {c} ({d}%)"
        },
        grid: {
            left:'5%',
            top:'10%',
            bottom:'3%',
            right:'5%',
            containLabel: true
        },
        // legend: {
        //     data:xdata
        // },

        xAxis : [
            {
                type : 'category',
                data : ydata,
                axisLabel: {
                    fontSize:10,
                    interval: 0
                    // formatter:function(val){
                    //     return val.split("").join("\n");
                    // }
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitArea : {show : true},
                axisLabel: {
                    formatter: '{value}%',
                },
            }
        ],
        series : [
            {
                name:xdata[0],
                type:'bar',
                barWidth: '35%',
                stack: '成绩',
                data:data0
            },
            {
                name:xdata[1],
                type:'bar',
                stack: '成绩',
                data:data1
            },
            {
                name:xdata[2],
                type:'bar',
                stack: '成绩',
                data:data2
            },{
                name:xdata[3],
                type:'bar',
                stack: '成绩',
                data:data3
            }
        ]
    };
    myChart.setOption(option, true);
}