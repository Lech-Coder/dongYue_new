var listWrapper = document.querySelector('.wodefansi'),
    listContent = document.querySelector('.list-content-hook'),
    // alert = document.querySelector('.bottom-tip'),

    topTip = document.querySelector('.refresh-hook'),
    bottomTip = document.querySelector('.loading-hook');


var data_tatol=14;  //总数据量
/*
 * 此处可优化,定义一个变量,记录用户滑动的状态,初始值为0,滑动中为1,滑动结束、数据请求成功重置为0
 * 防止用户刷新列表http请求过多
*/

function initScroll() {
    var scroll = new window.BScroll(listWrapper, {
        probeType: 1
    });
    // 滑动中
    scroll.on('scroll', function (position) {
        if(position.y > 30) {
            topTip.innerText = '';
        }
    });
    /*
     * @ touchend:滑动结束的状态
     * @ maxScrollY:屏幕最大滚动高度
    */
    // 滑动结束
    scroll.on('touchend', function (position) {
        if (position.y > 30) {

            setTimeout(function () {
                /*
                 * 这里发送ajax刷新数据
                 * 刷新后,后台只返回第1页的数据,无论用户是否已经上拉加载了更多
                */
                // // 恢复文本值
                // topTip.innerText = '下拉刷新';
                // // 刷新成功后的提示
                // refreshAlert('刷新成功');
                // 刷新列表后,重新计算滚动区域高度
                scroll.refresh();
            }, 1000);
        }else if(position.y < (this.maxScrollY - 30)) {
            let leng=$('.content').length
            let sing_leng = 3;   //单次加载数据长度


            if (leng<=data_tatol){
                bottomTip.innerText = '加载中...';
                setTimeout(function () {
                    // 恢复文本值
                    bottomTip.innerText = '向上滑动查看更多';
                    // 向列表添加数据  判断加入多少数据
                    if (data_tatol-leng<sing_leng){
                        sing_leng=data_tatol-leng
                    }
                    for(let i=0;i<sing_leng;i++){
                        reloadData();
                    }
                    // 加载更多后,重新计算滚动区域高度
                    scroll.refresh();
                }, 1000);
            } else{
                bottomTip.innerText = '加载中...';
                setTimeout(function () {
                    // 恢复文本值
                    bottomTip.innerText = '反思已全部显示';
                    // 加载更多后,重新计算滚动区域高度
                    scroll.refresh();
                }, 1000);
            }

        }
    });
}
initScroll();

// 加载更多方法
function reloadData() {
    var template ='<div class=\'content\'>\n' +
        '            <div class=\'head\' font=\'16\'>\n' +
        '                <h5>这里是文章的标题&nbsp;|&nbsp;赵老师</h5>\n' +
        '            </div>\n' +
        '            <div class="main">\n' +
        '                <p> 454545ddd</p>\n' +
        '            </div>\n' +
        '            <div class="foot" font=\'12\' flex="box:mean">\n' +
        '                <span>2017/10/16 &nbsp 15:23</span>\n' +
        '                <div>\n' +
        '                    <i class="icon-lianjie"></i>\n' +
        '                    <a href="javascript:void(0)">走和跑:模仿动物的走和跑</a>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
    // 向容器中添加内容

    $('.bottom-tip').before(template)




}

// // 刷新成功提示方法
// function refreshAlert(text) {
//   text = text || '操作成功';
//   alert.innerHtml = text;
//   alert.style.display = 'block';
//   setTimeout(function(){
//     alert.style.display = 'none';
//   },1000);
// }


