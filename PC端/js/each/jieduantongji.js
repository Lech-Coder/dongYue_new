function pie_sim(div,data) {
    var myChart = echarts.init(div);
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        // backgroundColor: '#fff',
        // title : {
        //     text: grade,
        //     x:'left'
        // },

        // color:['#37a2da','#67e0e3','#ffdb5c','#ff9f7f'],
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['正常','早退','缺勤','迟到']
        // },
        series: [
            {
                type:'pie',
                radius: '60%',
                // avoidLabelOverlap: false,
                label: {
                    // normal: {
                    //     show: false,
                    //     position: 'center'
                    // },

                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }

                },
                // labelLine: {
                //     normal: {
                //         show: false
                //     }
                // },
                data:data
            }
        ]
    };
    myChart.setOption(option, true);


}
function pie_wendu(div,data) {
    var myChart = echarts.init(div);
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        // backgroundColor: '#fff',
        // title : {
        //     text: grade,
        //     x:'left'
        // },

        color:['#67e0e3','#ff9f7f'],
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['正常','早退','缺勤','迟到']
        // },
        series: [
            {
                type:'pie',
                radius: '60%',
                // avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter:'{c}',
                        position: 'inside'
                    },

                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }

                },
                // labelLine: {
                //     normal: {
                //         show: false
                //     }
                // },
                data:data
            }
        ]
    };
    myChart.setOption(option, true);


}

