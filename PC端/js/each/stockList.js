$(function(){
  $(".toolsImport").click(function(){
    callAlert("toolsImportForm.html",{
      initFn:function(){
      },
      confirmFn:function(){

      }
    })
  });
  $('.jiaojuluru').click(function(){
    $('.alert-box').css('display','block');
    setAlertPosition();
  })

    //分配手环弹窗
  $(".class-box a.fenpei_shouhuan").click(function (d) {
      $('.shouhuan-box').css('display','block');
      setAlertPosition();

      $(".form-confirm2").on('click', ()=>{   //手环分组
          var fenzu_value=$("#enter_shouhuan")[0].value

          d.target.previousElementSibling.innerHTML=""
          d.target.previousElementSibling.append(fenzu_value)
          $('.shouhuan-box').css('display','none');

          $(this).addClass('focus').siblings().removeClass('focus')
      })

    })
    //更改手环弹窗
    $(".class-box a.config_shouhuan span:first-child").click(function (d) {
        $('.shouhuan-box').css('display','block');
        setAlertPosition();

        $(".form-confirm2").on('click',function () {   //手环分组
            var fenzu_value=$("#enter_shouhuan")[0].value
            d.target.parentNode.previousElementSibling.previousElementSibling.innerHTML=""
            d.target.parentNode.previousElementSibling.previousElementSibling.append(fenzu_value)
            $('.shouhuan-box').css('display','none');
        })
    })

    //删除手环弹窗内容
    $(".class-box a.config_shouhuan span:nth-child(2)").click(function (d) {
            d.target.parentNode.previousElementSibling.previousElementSibling.innerHTML=""
        // console.log($(d.target.parentNode))
        $(d.target.parentNode).addClass('focus').siblings().removeClass('focus')
        })

  setAlertPosition();
  selectNew(
    $('.no-next').on('click',function(){
      $('.classselect').parent().css({
        'display': 'none'
      })
    }),
    $('.ok-next').on('click',function(){
      $('.classselect').parent().css({
       'display': 'block'
      })
    })
  );


  // 跳转链接
  $('.dl-list li').click(function(){
    var myHref = $(this).attr('to').trim();
    window.location.href=myHref;
  })
  //文件名回显
  $("body").on("change",".toolTemplate",function(){
    var importName=$(this).val();
    $(this).closest("label").parent().prev().children().find(">input").val(importName);
  });


  $(".close-btn").click(function () {
    $('.alert-box').css('display','none');
      $('.shouhuan-box').css('display','none');
  });


  //管理选择
    $('.btn_manage').on('click','>a',function (d) {
        $(this).addClass('select_shebei').siblings().removeClass('select_shebei')
        var selectAim = $(this).attr("href").slice(1);
        switch (selectAim) {
            case "shebei_manage":
                $(".shebei_manage").css('display','block');
                  $(".come_stupe").css('display','none');
                  $(".peidui_manage").css('display','none');
                  $('.macaddress_table').css('display','none')
                  break;
            case "come_stupe":
                $(".shebei_manage").css('display','none');
                $(".come_stupe").css('display','block');
                $(".peidui_manage").css('display','none');
                $('.macaddress_table').css('display','none')
                break;
            case "peidui_manage":
                $(".shebei_manage").css('display','none');
                $(".come_stupe").css('display','none');
                $(".peidui_manage").css('display','block');
                $('.macaddress_table').css('display','none')
                break;
        }
    })

    let is_Change=true;
    $(".piliang_button").click(function () {
        if (is_Change){
            $(".banji_fenpei").css('display','block');
            $(".class-box_box input").css('display','block');
            is_Change=false;
        }else {
            $(".banji_fenpei").css('display','none');
            $(".class-box_box input").css('display','none');
            is_Change=true;
        }
    })

    //添加Mac_address
    let id=1
    $(".address_click").click(function () {
        id++
        mac_address($(".Mac_address_value")[0].value ,id)
    })
    function mac_address(value,id) {
        var parent = document.getElementsByClassName("Mac_address")[0]
        var div = document.createElement("div")
        var input = document.createElement("input")
        var a = document.createElement("i")
        div.setAttribute("class","single_address mt10")
        a.setAttribute("class","icon-errorTip delet_address address_"+id)
        // a.innerText="删除"
        input.value = value
        div.appendChild(input);
        div.appendChild(a)
        parent.appendChild(div);

        //删除Mac_address
        $(".address_"+id).on('click',function (d) {
            deleteDiv(d.target.parentElement)
        })
    }

    //add设备管理

    $('.shebei_manage button').on('click',function () {

        let value =  $('.shebei_manage input')[0].value;
        if (value!=''){
            add_sing_shebei_name(value)
        }
    })

    function add_sing_shebei_name(value){
        let num =$('.single_shebei_name').length
        let p = '<p>'+(++num)+'</p>'
        let str_a = "a"+num
        let a = ' <a class='+str_a+'>'+value+'</a>'
        let str = 'single_delete'+num

        let span = '<span class='+str+'>删除</span>'
        $('.shebei_name').append('<div class="single_shebei_name">'+p+a+span+'</div>')
        $(".single_delete"+num).on('click',function (d) {
            deleteDiv(d.target.parentElement)
            let total = $('.single_shebei_name').length
            for (let i=0;i<total;i++){
                $('.single_shebei_name')[i].firstChild.innerText=i+1
            }
        })
        $(".a"+num).on('click',function (d) {
            $('.macaddress_table').css('display','block')
            $(".shebei_manage").css('display','none');
        })

    }

    function deleteDiv(my)
    {
        if (my != null)
            my.parentNode.removeChild(my);
    }

  // 教具导入弹窗
  // $('.jiaojuluru').click(function(){
  //   Alert.selectBox({
  //     title:"教具录入",
  //     file:true,//是否启用文件上传选项框
  //     selectList:[
  //         {
  //           placeholder:{//选项框
  //             text:'请选择器械种类',//选项框placeholder提示信息
  //             id:'placeholderId1'//选项框id
  //           },
  //           list:[//下拉选项  数组 数组存放每个下拉对象 包括 id 和显示文本
  //             {
  //               id:'listId1',//当前选项id
  //               text:'电子设备'//当前选项文本
  //             },
  //             {
  //               id:'listId2',//当前选项id
  //               text:'固定器材'//当前选项文本
  //             },
  //             {
  //               id:'listId2',//当前选项id
  //               text:'消耗器材'//当前选项文本
  //             }]
  //         }
  //       ],
  //       callBack:function(){
  //         $('body').on('click','.form-confirm',function(){
  //           alert('sd')
  //         })
  //       }
  //     });
  // })
})
