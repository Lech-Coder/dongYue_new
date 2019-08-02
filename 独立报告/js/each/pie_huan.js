function pie_huanxin(div,data) {
    var myChart = echarts.init(div);
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // grid: {
        //     left:'5%',
        //     top:'5%',
        //     bottom:'10%',
        //     right:'10%',
        //     containLabel: true
        // },
        title: {
            text: '男生近视率32%',
            subtext:'女生近视率35%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize:24,
                fontWeight:'normal',
                color: '#37a2da'
            },
            subtextStyle: {
                color: '#ff8175',
                fontSize: 24
            },
        },

        legend: {
            orient: 'vertical',
            x: '2%',
            y:'5%',
            height:300,
            data:changdata(data)
        },
        series: [

            {
                name:'访问来源',
                type:'pie',
                radius: ['40%', '55%'],
                label: {
                    normal: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
                            // abg: {
                            //     backgroundColor: '#333',
                            //     width: '100%',
                            //     align: 'right',
                            //     height: 22,
                            //     borderRadius: [4, 4, 0, 0]
                            // },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
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
