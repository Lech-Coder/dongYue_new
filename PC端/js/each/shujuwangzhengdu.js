function sanxing(dom,title,value){
    var myChart = echarts.init(dom);
    option = {
        title : [{
            text: title,//标题
        },{
            text:value+'%',
            x:'47%',
            y:'55%',
            textStyle: {
                fontSize:20,
                fontWeight:'normal',
                color: '#fff'
            },
        }
        ],
        color:['#82B64A','#fff'],
        series: [
            {
                type:'pie',
                radius: '55%',
                itemStyle : {
                    normal : {
                        label : {
                            show : false,
                        },
                        labelLine : {
                            show : false,//显示标签线
                        },
                    },

                },
                data:[{value:value},{value:100-value}]
            }
        ]
    };
    myChart.setOption(option);
}
