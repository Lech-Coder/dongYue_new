function grade_tongji(dom,oridata,grade,grade_class) {

    dom.style.height=(dom.clientWidth)/4+'px'
    var myChart = echarts.init(dom);
    var data0 = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var total;
    for (var i = 0, l = oridata[0].length; i < l; i++) {
        total = oridata[0][i]*1 + oridata[1][i]*1 + oridata[2][i]*1+ oridata[3][i]*1;

        console.log(total)
        data0.push(Math.round(oridata[0][i]/total * 100));
        data1.push(Math.round(oridata[1][i]/total * 100));
        data3.push(Math.round(oridata[3][i]/total * 100));
        data2.push(100 - data0[data0.length - 1] - data1[data1.length - 1]- data3[data3.length - 1]);

    }

    var pdata = [
        {value:t(oridata[0]), name:'不及格'},
        {value:t(oridata[1]), name:'及格'},
        {value:t(oridata[2]), name:'良好'},
        {value:t(oridata[3]), name:'优秀'}
    ]

    function t(arr){
        let tol=0
        for(let i=0;i<arr.length;i++){
            tol=tol+arr[i]*1
        }
        return tol
    }
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : { // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            // formatter: "{b}: {value}%"
        },
        color:['#d8d8d8','#f59b1e','#00a9f0','#83b749'],
        legend: {
            data:["优秀",'良好','及格','不及格']
        },
        title:{
            text:grade,
            x:'1%',
            y:'5%',
            textStyle:{
                fontSize:26
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : grade_class
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitArea : {show : true},
                axisLabel: {
                    formatter: '{value}%',
                }
            }
        ],
        grid:{
            left:'40%',
            right:'5%'
        },
        series : [
            {
                name:'不及格',
                type:'bar',
                stack: '成绩',
                data:data0
            },
            {
                name:'及格',
                type:'bar',
                stack: '成绩',
                data:data1
            },
            {
                name:'良好',
                type:'bar',
                stack: '成绩',
                data:data2
            },{
                name:'优秀',
                type:'bar',
                barWidth: '35%',
                stack: '成绩',
                data:data3
            },
            {
                name:'访问来源',
                type:'pie',
                radius: '55%',
                center:['17%','50%'],
                label: {
                    normal: {
                        formatter: '{d}%',
                        position: 'inside',
                        textStyle:{
                            fontSize:16
                        }
                    }
                },

                data:pdata
            }
        ]
    };
    myChart.setOption(option, true);


}
