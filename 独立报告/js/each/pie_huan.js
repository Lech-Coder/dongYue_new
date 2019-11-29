var  resizeChart=[]

function pie_huanxin(div,data) {
    var myChart = echarts.init(div);
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
            left:'5%',
            top:'10%',
            bottom:'5%',
            right:'5%',
            containLabel: true
        },
        title: {
            text: '男生近视率32%',
            subtext:'女生近视率35%',
            x: '43%',
            y: '53%',
            textStyle: {
                fontSize:18,
                fontWeight:'normal',
                color: '#37a2da'
            },
            subtextStyle: {
                color: '#ff8175',
                fontSize: 18
            },
        },

        legend: {
            // orient: 'vertical',
            x: '3%',
            data:changdata(data)
        },
        series: [

            {
                name:'近视率',
                type:'pie',
                radius: ['40%', '55%'],
                center: ['50%', '60%'],
                // label: {
                //     show:false,
                //     // normal: {
                //     //     formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                //     //     backgroundColor: '#eee',
                //     //     borderColor: '#aaa',
                //     //     borderWidth: 1,
                //     //     borderRadius: 4,
                //     //     // shadowBlur:3,
                //     //     // shadowOffsetX: 2,
                //     //     // shadowOffsetY: 2,
                //     //     // shadowColor: '#999',
                //     //     // padding: [0, 7],
                //     //     rich: {
                //     //         a: {
                //     //             color: '#999',
                //     //             lineHeight: 22,
                //     //             align: 'center'
                //     //         },
                //     //         // abg: {
                //     //         //     backgroundColor: '#333',
                //     //         //     width: '100%',
                //     //         //     align: 'right',
                //     //         //     height: 22,
                //     //         //     borderRadius: [4, 4, 0, 0]
                //     //         // },
                //     //         hr: {
                //     //             borderColor: '#aaa',
                //     //             width: '100%',
                //     //             borderWidth: 0.5,
                //     //             height: 0
                //     //         },
                //     //         b: {
                //     //             fontSize: 16,
                //     //             lineHeight: 33
                //     //         },
                //     //         per: {
                //     //             color: '#eee',
                //     //             backgroundColor: '#334455',
                //     //             padding: [2, 4],
                //     //             borderRadius: 2
                //     //         }
                //     //     }
                //     // }
                // },
                data:data
            }
        ]
    };
    myChart.setOption(option, true);
}

function changdata(data) {
    var arr=[]
    for (var i=0;i<data.length;i++){
        arr.push(data[i].name)
    }
    return arr
}

//学校体质健康报告
function half_pie(div,title,minValue,height_data,little_data,cucolor) {
    var myChart = echarts.init(div);
    option = {
        title:{
            text:title,
            left:'5%' ,
            top:'5%'
        },
        "series": [
            {
                "radius": [
                    "49%",
                    "50%"
                ],
                // "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "textStyle": {
                                "fontSize": 25,   //字体
                                "fontWeight": "bold"
                            },
                            "position": "center"
                        },
                        // "labelLine": {
                        //     "show": false
                        // },
                        "color": "black",     //字的颜色
                        "borderColor": cucolor,    //粗线背景色
                        "borderWidth": 15
                    }
                },
                "data": [
                    {
                        "name": " ",
                        "value": little_data,     //细线数据
                        "itemStyle": {
                            "normal": {
                                // "label": {
                                //     // "show": false
                                // },
                                // "labelLine": {
                                //     "show": false
                                // },
                                "color": "#5886f0",
                                "borderColor": "#ccc",
                                "borderWidth": 3
                            }
                        }
                    },
                    {
                        "value": height_data,        //粗线数据
                        "name": minValue
                    }

                ]
            }
        ]
    };
    myChart.setOption(option, true);
}

function bar_duidie(dom,oridata,xdata,ydata) {
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
        color:['#e2b000','#ff7640','#185c80','#1e9ea1'],
        tooltip : {
            trigger: 'axis',
            axisPointer : { // 坐标轴指示器，坐标轴触发有效
                type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            // formatter: "{b}: {c} ({d}%)"
        },
        grid: {
            left:'10%',
            top:'10%',
            bottom:'10%',
            right:'10%',
        },
        legend: {
            data:xdata
        },
        xAxis : [
            {
                type : 'category',
                data : ydata
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

    resizeChart.push(myChart)
}

function simple_pie(dom,pdata){
    var myChart = echarts.init(dom);
    option = {
        title : {
            text: '总体比例'
        },
        grid: {
            left:'10%',
            top:'10%',
            bottom:'10%',
            right:'10%',
        },
        color:['#185c80','#ff7640','#e2b000','#1e9ea1'],
        tooltip : {
            formatter: "{b} : {d}%"
        },
        series : [
            {
                type: 'pie',
                radius : '50%',
                center: ['50%', '60%'],
                label:{
                    normal:{
                        formatter: "{b}{d}%",
                        fontSize:12,
                    }
                },
                labelLine:{
                    length:3,
                    length2:3
                },
                data:pdata,
                // itemStyle: {
                //     emphasis: {
                //         shadowBlur: 10,
                //         shadowOffsetX: 0,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // }
            }
        ]
    };
    myChart.setOption(option, true);
    resizeChart.push(myChart)
}
function simple_bar(dom,grade,bdata,PE_type) {
    var myChart = echarts.init(dom);

    option = {
        color: ['#3398DB'],
        title:{
            text:grade
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '10%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : PE_type,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{
                    rotate:40,
                    fontSize:12
                }
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
                barWidth: '40%',
                data:bdata
            }
        ]
    };
    myChart.setOption(option, true);
    resizeChart.push(myChart)
}
function simple_line(dom,type_name,boy_data,girl_data,x_line_data) {
    var min = 0
    var arr_ = boy_data.concat(girl_data)
    if (arr_.length>0) {
        min=Math.min.apply(null,arr_)
    }

    var myChart = echarts.init(dom);
    option = {
        title: {
            text: type_name
        },
        color:['#28b4f2','#ed88dd'],
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            data:['男生','女生']
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: x_line_data,
            axisLabel:{
                fontSize:16
            }
        },
        yAxis: {
            type: 'value',
            min:Math.floor(min*0.8)
        },
        series: [
            {
                name:'男生',
                type:'line',
                data:boy_data
            },
            {
                name:'女生',
                type:'line',
                data:girl_data
            }
        ]
    };
    myChart.setOption(option, true);
    resizeChart.push(myChart)
}
function rose_pie(dom,pdata){
    var myChart = echarts.init(dom);
    option = {
        grid: {
            left:'10%',
            top:'5%',
            bottom:'10%',
            right:'10%',
        },
        color:['#185c80','#1e9ea1','#e2b000','#ff7640'],
        tooltip : {
            formatter: "{b} : {d}%"
        },
        series : [
            {
                type: 'pie',
                radius : '60%',
                roseType: 'radius',
                label:{
                    normal:{
                        formatter: "{b}  {d}%",
                        fontSize:12,
                    }
                },
                data:pdata,
                // itemStyle: {
                //     emphasis: {
                //         shadowBlur: 10,
                //         shadowOffsetX: 0,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // }
            }
        ]
    };
    myChart.setOption(option, true);
    return myChart
}

function line_sport(div,data_x,data) {

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
        color:['#c1413e','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39'],
        xAxis: {
            type: 'category',
            data: data_x
        },
        // grid: {
        //     left:'10%',
        //     top:'5%',
        //     bottom:'10%',
        //     right:'10%',
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:data_set(data),
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
function  data_set(data) {
    var le=[]
    for(let i=0;i<data.length;i++){
        le.push(data[i].name)
    }
    return le
}
