//给选中班级课表选中框中添加或移除样式

function checkThis(obj){
    if($(obj).hasClass("current")){

        $(obj).removeClass("current");
    }else{
        //获取当前的weekday的值
        var num = $(obj).attr('weekDay');
        var teacherName = $("#tanchu").attr("teacherName");

        if($(obj).hasClass("cantClick")){

            $(obj).removeClass("set-class-item");
        }else{

            //给当前的表格添加状态
            $(obj).addClass("current");
            //和同列表格的兄弟进行比较
            $(obj).parent().siblings().find('td').each(function(){
                var num2 = $(this).attr('weekDay');
                //若存在相同值则移除样式
                if (num == num2) {
                    $(this).removeClass("current");
                }
            });
            $(".schedule-table .current").attr('data-content', "体育 | "+teacherName);
        }
    }
}

//改变isEdit方法
function checkIsEdit(){
    isEdit==true?$(".set-teacher-item").addClass("set-class-item"):
        $(".set-teacher-item").removeClass("set-class-item");
}

//保存或修改班级课表信息
function saveSchoolTimeTable(obj){
    $(obj).hide();
    isEdit=false;
    checkIsEdit();

    var classId = $(".banji-list-box").find("div.banji-item.active").attr("classId");
    if(!classId){
        Alert.globalWarning({
            times : 1250,
            type : "error",
            words : "请先选择班级!",
            callBack : function(){
                return;
            }
        });
        return;
    }
    var teachingPlanId = $('.new-kebiao').attr('teachingPlanId');
    var _list = new Array();
    $(".schedule-table").find('td.set-teacher-item').each(function(){
        if($(this).hasClass("current")){
            var SchoolTimeTable = {};
            SchoolTimeTable.classId = classId;
            SchoolTimeTable.teachingPlanId = teachingPlanId;
            SchoolTimeTable.weekDay = $(this).attr("weekDay");
            SchoolTimeTable.lesson = $(this).attr("lesson");
            SchoolTimeTable.curUserPin = $(this).attr("curUserPin");
            _list.push(SchoolTimeTable);
        }
    });
    if(_list.length == 0){
        Alert.globalWarning({
            times : 1250,
            type : "error",
            words : "请勾选课表!",
            callBack : function(){
                return;
            }
        });
        $(obj).show();
        isEdit=true;
        checkIsEdit();
        return;
    }
    var list=JSON.stringify(_list);
    if(list.length >0){
        Alert.twoBtn({
            'words': '修改班级课程安排,会初始化备课管理,是否确认修改？',
            'btnLeft': '确认',
            'btnRight': '取消',
            'time': 3,
            'btnRightGray': true,
            'timer': true,
            'callBack': function () {
                $('.icon-guanbi').click(function () {
                    $(obj).show();
                })
                $('#btn-right').click(function () {
                    Alert.removeDialog("alertType");
                    $(obj).show();
                    isEdit=true;
                    checkIsEdit();
                    //点击取消
                    $('.close-btn').click();
                });
                $('#btn-left').click(function () {
                    Alert.loading("show");
                    $.ajax({
                        type : 'post',
                        url : "saveSchoolTimeTable.do",
                        dataType:"html",
                        contentType:"application/json",
                        data :list ,
                        success : function(result) {
                            Alert.loading("hide");
                            Alert.removeDialog("alertType");
                            if(result == "ok"){
                                Alert.globalWarning({
                                    times : 1300,
                                    type : "success",
                                    words : "保存成功",
                                    callBack : function(){
                                    }
                                });
                                $(obj).hide();
                                isEdit=false;
                                checkIsEdit();
                                $(".new-kebiao .revise").show();
                            }else{
                                Alert.globalWarning({
                                    times : 1300,
                                    type : "error",
                                    words : result,
                                    callBack : function(){
                                        return;
                                    }
                                });
                            }
                        },
                        error : function() {
                            Alert.globalWarning({
                                times : 1300,
                                type : "error",
                                words : "操作失败！,error",
                            });
                        }
                    });
                });
            },
        });
//		Alert.dialogBox("alert-talk","修改班级课程安排,会初始化备课管理,是否确认修改？",{
//			confirmFn:function(){
//
//			},
//			cancelFn:function(){
//
//			}
//		});
    }else{
        Alert.globalWarning({
            times : 1300,
            type : "error",
            words : "课表不能为空",
        });
    }
}

$(function(){

    $("body").on("click",".set-class-item",function(){
        checkThis(this);
    });
    $(".new-kebiao").on("click",".asdf-box .revise",function(){
        $(this).hide();
        isEdit=true;
        checkIsEdit();
        $(".new-kebiao .confirm_new").show();
    });

    $(".banji-list-box").on("click","div.banji-item",function(){
        var obj = $(this);
        if(!obj.hasClass("active")){
            obj.addClass("active").siblings().removeClass("active");
            var kebiao = $('.new-kebiao');
            if(!$(".change-box").hasClass("noChange")){
                kebiao.children().first().siblings().remove();
                kebiao.append(htmlNo);
                kebiao.children().first().addClass("noChange");
                kebiao.children().first().children().children().removeClass("active");
            }
        }
    });

    $(".new-kebiao").on("click",".change-box .box-box .item",function(){
        var classId = $(".banji-list-box").find("div.banji-item.active").attr("classId");
        if(!classId){
            Alert.globalWarning({
                times : 1250,
                type : "error",
                words : "请先选择班级!",
                callBack : function(){
                    return;
                }
            });
            return;
        }
        var obj = $(this);
        if(!obj.hasClass("active")){
            var term = obj.attr("term");
            Alert.loading("show");
            $.ajax({
                url : "queryTeachingPlan.do",
                data : {
                    term : term,
                    classId : classId
                },
                type : 'post',
                success : function(result) {
                    var string = result.split("|");
                    if(string[0] == 1){
                        var teachingPlanId = string[1];
                        $('.new-kebiao').attr("teachingPlanId",string[1]);
                        var lesson = "";
                        var weekDay ="";
                        $.ajax({
                            url : "getSchoolTimeList.do",
                            data : {
                                term : term,
                                classId : classId,
                                teachingPlanId : teachingPlanId
                            },
                            type : 'post',
                            success : function(result) {
                                Alert.loading("hide");
                                var kebiao = $('.new-kebiao');
                                kebiao.children().first().siblings().remove();
                                kebiao.children().first().removeClass("noChange");
                                kebiao.append(html);
                                var list = $.parseJSON(result);
                                $.each(list, function(n,m){
                                    lesson = m.lesson;
                                    weekDay = m.weekDay;
                                    classId1 = m.classId;
                                    className = m.className;
                                    curUserPin = m.curUserPin;
                                    $(".schedule-table").find('td.set-teacher-item').each(function(){
                                        var lesson1 = $(this).attr("lesson");
                                        var weekDay1 = $(this).attr("weekDay");

                                        if(lesson == lesson1 && weekDay == weekDay1 ){
                                            if(classId1 == classId){
                                                //添加样式
                                                $(this).addClass("current");
//												$(this).attr("className",className);
                                                $(this).attr("curUserPin",curUserPin);
                                                $(".schedule-table .current").attr('data-content', className);
                                            }
                                        }
                                    });
                                });
                                obj.addClass("active").siblings().removeClass("active");

                            },
                            error : function(result) {
                                Alert.loading("hide");
                                Alert.globalWarning({
                                    times : 1250,
                                    type : "error",
                                    words : "操作失败,error!",
                                    callBack : function(){
                                        return;
                                    }
                                });
                            }
                        });
                    }else{
                        Alert.loading("hide");
                        Alert.globalWarning({
                            times : 1250,
                            type : "error",
                            words : "没有对应教学计划",
                            callBack : function(){
                                return;
                            }
                        });
                    }
                },
                error : function(result) {
                    Alert.loading("hide");
                    Alert.globalWarning({
                        times : 1250,
                        type : "error",
                        words : "操作失败,error!",
                        callBack : function(){
                            return;
                        }
                    });
                }
            });
        }

    });

    var html = '<div class="asdf-box">\
		<h3 class="ml10">同步授课表</h3>\
		<a href="javascript:;" class="btn grayBtn revise">解锁</a>\
		<a href="javascript:;" onclick="saveSchoolTimeTable(this)" class="btn themeBtn confirm_new" style="display:none">保存</a>\
		</div>\
		<div class="schedule-exceil t_c">\
		<table class="schedule-table updataeSchedule" border="0" cellspacing="0" cellpadding="0">\
		<thead class="txt_w">\
		<tr>\
		<td>节</td>\
		<td class="">星期一</td>\
		<td class="">星期二</td>\
		<td class="">星期三</td>\
		<td class="">星期四</td>\
		<td class="">星期五</td>\
		</tr>\
		</thead>\
		<tbody class="back_white">\
		<tr>\
		<td>第一节</td>\
		<td class="set-teacher-item" lesson="1" weekDay="1"></td>\
		<td class="set-teacher-item" lesson="1" weekDay="2"></td>\
		<td class="set-teacher-item" lesson="1" weekDay="3"></td>\
		<td class="set-teacher-item" lesson="1" weekDay="4"></td>\
		<td class="set-teacher-item" lesson="1" weekDay="5"></td>\
		</tr>\
		<tr>\
		<td>第二节</td>\
		<td class="set-teacher-item" lesson="2" weekDay="1"></td>\
		<td class="set-teacher-item" lesson="2" weekDay="2"></td>\
		<td class="set-teacher-item" lesson="2" weekDay="3"></td>\
		<td class="set-teacher-item" lesson="2" weekDay="4"></td>\
		<td class="set-teacher-item" lesson="2" weekDay="5"></td>\
		</tr>\
		<tr>\
		<td>第三节</td>\
		<td class="set-teacher-item" lesson="3" weekDay="1"></td>\
		<td class="set-teacher-item" lesson="3" weekDay="2"></td>\
		<td class="set-teacher-item" lesson="3" weekDay="3"></td>\
		<td class="set-teacher-item" lesson="3" weekDay="4"></td>\
		<td class="set-teacher-item" lesson="3" weekDay="5"></td>\
		</tr>\
		<tr>\
		<td>第四节</td>\
		<td class="set-teacher-item" lesson="4" weekDay="1"></td>\
		<td class="set-teacher-item" lesson="4" weekDay="2"></td>\
		<td class="set-teacher-item" lesson="4" weekDay="3"></td>\
		<td class="set-teacher-item" lesson="4" weekDay="4"></td>\
		<td class="set-teacher-item" lesson="4" weekDay="5"></td>\
		</tr>\
		<tr>\
		<td colspan="6">中午</td>\
		</tr>\
		<tr>\
		<td>第五节</td>\
		<td class="set-teacher-item" lesson="5" weekDay="1"></td>\
		<td class="set-teacher-item" lesson="5" weekDay="2"></td>\
		<td class="set-teacher-item" lesson="5" weekDay="3"></td>\
		<td class="set-teacher-item" lesson="5" weekDay="4"></td>\
		<td class="set-teacher-item" lesson="5" weekDay="5"></td>\
		</tr>\
		<tr>\
		<td>第六节</td>\
		<td class="set-teacher-item" lesson="6" weekDay="1"></td>\
		<td class="set-teacher-item" lesson="6" weekDay="2"></td>\
		<td class="set-teacher-item" lesson="6" weekDay="3"></td>\
		<td class="set-teacher-item" lesson="6" weekDay="4"></td>\
		<td class="set-teacher-item" lesson="6" weekDay="5"></td>\
		</tr>\
		<tr>\
		<td>第七节</td>\
		<td class="set-teacher-item" lesson="7" weekDay="1"></td>\
		<td class="set-teacher-item" lesson="7" weekDay="2"></td>\
		<td class="set-teacher-item" lesson="7" weekDay="3"></td>\
		<td class="set-teacher-item" lesson="7" weekDay="4"></td>\
		<td class="set-teacher-item" lesson="7" weekDay="5"></td>\
		</tr>\
		<tr>\
		<td>第八节</td>\
		<td class="set-teacher-item" lesson="8" weekDay="1"></td>\
		<td class="set-teacher-item" lesson="8" weekDay="2"></td>\
		<td class="set-teacher-item" lesson="8" weekDay="3"></td>\
		<td class="set-teacher-item" lesson="8" weekDay="4"></td>\
		<td class="set-teacher-item" lesson="8" weekDay="5"></td>\
		</tr>\
		</tbody>\
		</table>\
		</div>';

    var htmlNo = '<div class="asdf-box">\
			<h3 class="ml10">同步授课表</h3>\
			</div>\
			<div class="schedule-exceil t_c">\
			<table class="schedule-table updataeSchedule" border="0" cellspacing="0" cellpadding="0">\
			<thead class="txt_w">\
			<tr>\
			<td>节</td>\
			<td class="">星期一</td>\
			<td class="">星期二</td>\
			<td class="">星期三</td>\
			<td class="">星期四</td>\
			<td class="">星期五</td>\
			</tr>\
			</thead>\
			<tbody class="back_white">\
			<tr>\
			<td>第一节</td>\
			<td class="set-teacher-item" lesson="1" weekDay="1"></td>\
			<td class="set-teacher-item" lesson="1" weekDay="2"></td>\
			<td class="set-teacher-item" lesson="1" weekDay="3"></td>\
			<td class="set-teacher-item" lesson="1" weekDay="4"></td>\
			<td class="set-teacher-item" lesson="1" weekDay="5"></td>\
			</tr>\
			<tr>\
			<td>第二节</td>\
			<td class="set-teacher-item" lesson="2" weekDay="1"></td>\
			<td class="set-teacher-item" lesson="2" weekDay="2"></td>\
			<td class="set-teacher-item" lesson="2" weekDay="3"></td>\
			<td class="set-teacher-item" lesson="2" weekDay="4"></td>\
			<td class="set-teacher-item" lesson="2" weekDay="5"></td>\
			</tr>\
			<tr>\
			<td>第三节</td>\
			<td class="set-teacher-item" lesson="3" weekDay="1"></td>\
			<td class="set-teacher-item" lesson="3" weekDay="2"></td>\
			<td class="set-teacher-item" lesson="3" weekDay="3"></td>\
			<td class="set-teacher-item" lesson="3" weekDay="4"></td>\
			<td class="set-teacher-item" lesson="3" weekDay="5"></td>\
			</tr>\
			<tr>\
			<td>第四节</td>\
			<td class="set-teacher-item" lesson="4" weekDay="1"></td>\
			<td class="set-teacher-item" lesson="4" weekDay="2"></td>\
			<td class="set-teacher-item" lesson="4" weekDay="3"></td>\
			<td class="set-teacher-item" lesson="4" weekDay="4"></td>\
			<td class="set-teacher-item" lesson="4" weekDay="5"></td>\
			</tr>\
			<tr>\
			<td colspan="6">中午</td>\
			</tr>\
			<tr>\
			<td>第五节</td>\
			<td class="set-teacher-item" lesson="5" weekDay="1"></td>\
			<td class="set-teacher-item" lesson="5" weekDay="2"></td>\
			<td class="set-teacher-item" lesson="5" weekDay="3"></td>\
			<td class="set-teacher-item" lesson="5" weekDay="4"></td>\
			<td class="set-teacher-item" lesson="5" weekDay="5"></td>\
			</tr>\
			<tr>\
			<td>第六节</td>\
			<td class="set-teacher-item" lesson="6" weekDay="1"></td>\
			<td class="set-teacher-item" lesson="6" weekDay="2"></td>\
			<td class="set-teacher-item" lesson="6" weekDay="3"></td>\
			<td class="set-teacher-item" lesson="6" weekDay="4"></td>\
			<td class="set-teacher-item" lesson="6" weekDay="5"></td>\
			</tr>\
			<tr>\
			<td>第七节</td>\
			<td class="set-teacher-item" lesson="7" weekDay="1"></td>\
			<td class="set-teacher-item" lesson="7" weekDay="2"></td>\
			<td class="set-teacher-item" lesson="7" weekDay="3"></td>\
			<td class="set-teacher-item" lesson="7" weekDay="4"></td>\
			<td class="set-teacher-item" lesson="7" weekDay="5"></td>\
			</tr>\
			<tr>\
			<td>第八节</td>\
			<td class="set-teacher-item" lesson="8" weekDay="1"></td>\
			<td class="set-teacher-item" lesson="8" weekDay="2"></td>\
			<td class="set-teacher-item" lesson="8" weekDay="3"></td>\
			<td class="set-teacher-item" lesson="8" weekDay="4"></td>\
			<td class="set-teacher-item" lesson="8" weekDay="5"></td>\
			</tr>\
			</tbody>\
			</table>\
			</div>';
});
