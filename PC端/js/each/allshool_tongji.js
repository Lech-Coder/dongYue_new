function simple_pie(dom,pdata){
    var myChart = echarts.init(dom);
    option = {
        color:['#83b749','#00a9f0','#f59b1e','#d8d8d8'],
        series: [
            {
                type:'pie',
                radius: '55%',
                label: {
                    normal: {
                        formatter: '{c}',
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
    // 为echarts对象加载数据
    myChart.setOption(option);
}
function half_pie(div,minValue,totale,cucolor) {
    var myChart = echarts.init(div);
    option = {
        title:{
            text:minValue+'人',
            x: 'center',
            y: 'center'
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
                                "fontSize": 20,   //字体
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
                        "value": totale-minValue,     //细线数据
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
                        "value": minValue,        //粗线数据
                    }

                ]
            }
        ]
    };
    myChart.setOption(option, true);
}
